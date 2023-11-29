import client from "@mailchimp/mailchimp_marketing";
import md5 from 'crypto-js/md5';

export const POST = async ({ request }) => {
    const listId = "d842d98289";

    client.setConfig({
        apiKey: import.meta.env.MAILCHIMP_API_KEY,
        server: import.meta.env.MAILCHIMP_SERVER_PREFIX,
    });

    function getEmailHash(email) {
        return md5(email.toLowerCase()).toString();
    }

    // Function to check if a member exists in a Mailchimp list
    async function checkIfMemberExists(mailchimpApiKey, mailchimpServerPrefix, mailchimpListId, emailHash) {
        const response = await fetch(`https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members/${emailHash}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${mailchimpApiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            // Member exists
            return true;
        } else if (response.status === 404) {
            // Member does not exist
            return false;
        } else {
            // Handle other HTTP responses appropriately
            throw new Error(`Mailchimp API responded with status: ${response.status}`);
        }
    }

    // Create an array with tagName and all the interests

    // Function to send data to Mailchimp
    const createNewMailchimpMember = async (data) => {
        console.log(data);

        // Check if interests is an array, if not, create an empty array
        const interestsArray = Array.isArray(data.interests) ? data.interests : [];

        // Combine tagName with interests into a new array
        const combinedTags = interestsArray.concat([data.tagName]);

        try {
            const response = await client.lists.addListMember(listId, {
                email_address: data.email,
                status: "subscribed",
                tags: combinedTags,
                merge_fields: {
                    FNAME: data.firstName,
                    LNAME: data.lastName,
                    ORG: data.organisation,
                    MMERGE6: data.jobTitle
                }
            });

            console.log(response);
            return { success: true, data: response }; // Return a success response
        } catch (error) {
            console.error('Error adding member to Mailchimp:', error);

            // Parse and handle specific Mailchimp error
            if (error.status === 400) {
                try {
                    const errorDetails = JSON.parse(error.text);
                    if (errorDetails.title === 'Forgotten Email Not Subscribed') {
                        return { success: false, message: errorDetails.detail };
                    }
                } catch (parseError) {
                    console.error('Error parsing Mailchimp error response:', parseError);
                }
            }

            // General error handling
            return { success: false, message: 'An error occurred while adding the member to Mailchimp.' };
        }
    };


    // Function to add a tag to a Mailchimp member
    async function addTagToMember(mailchimpApiKey, mailchimpServerPrefix, mailchimpListId, emailHash, tagName) {
        const tagData = {
            tags: [
                { name: tagName, status: 'active' }
            ]
        };

        const response = await fetch(`https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpListId}/members/${emailHash}/tags`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${mailchimpApiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tagData)
        });

        if (!response.ok) {
            throw new Error(`Error adding tag to Mailchimp member: ${response.statusText}`);
        }

        // Read response as text first
        const responseText = await response.text();

        try {
            // Check if the response text is non-empty and parse it as JSON
            if (responseText) {
                return JSON.parse(responseText);
            } else {
                // Handle non-JSON or empty response
                return { message: 'Tag added successfully', status: response.status };
            }
        } catch (e) {
            throw new Error(`Error parsing response as JSON: ${e.message}`);
        }
    }

    const headers = new Headers({
        "Access-Control-Allow-Origin": "*", // Allows all origins
        "Content-Type": "application/json"
    });

    try {
        const formData = await request.json();

        // Extract formData
        const { firstName, lastName, email, interests, tagName, organisation } = formData;

        // Check if the required fields are present
        if (!firstName || !lastName) {
            return new Response(JSON.stringify({ error: 'Name and first name are required.' }), { status: 400, headers });
        }

        if (!firstName || !lastName) {
            return new Response(JSON.stringify({ error: 'Email address is required.' }), { status: 400, headers });
        }

        // Check if the email is valid
        if (!email.includes('@')) {
            return new Response(JSON.stringify({ error: 'Email address is not valid.' }), { status: 400, headers });
        }

        // Check if the interests are valid
        if (!interests || !Array.isArray(interests)) {
            return new Response(JSON.stringify({ error: 'Interests are not valid.' }), { status: 400, headers });
        }

        // Check if the tag name is valid
        // if (!organisation) {
        //     return new Response(JSON.stringify({ error: 'Organisation is not defined.' }), { status: 400, headers });
        // }

        // Check if the tag name is valid
        if (!tagName) {
            return new Response(JSON.stringify({ error: 'Tag name is not valid.' }), { status: 400, headers });
        }

        const emailHash = getEmailHash(email);
        const memberExists = await checkIfMemberExists(import.meta.env.MAILCHIMP_API_KEY, import.meta.env.MAILCHIMP_SERVER_PREFIX, listId, emailHash);

        // Check if the member exists
        if (memberExists) {
            // Add tag to the existing member
            await addTagToMember(import.meta.env.MAILCHIMP_API_KEY, import.meta.env.MAILCHIMP_SERVER_PREFIX, listId, emailHash, tagName);
            return new Response(JSON.stringify({ message: "Member exists. Tag added." }), { status: 200, headers });
        }

        // Send to Mailchimp
        createNewMailchimpMember(formData);

        // Your existing code
        return new Response(JSON.stringify({ data: formData, receivedData: formData }), { status: 200, headers });
    } catch (error) {
        console.error('Error parsing JSON:', error);

        // Return an error response
        return new Response(JSON.stringify({ error: 'Invalid JSON.' }), { status: 400, headers });
    }
};
