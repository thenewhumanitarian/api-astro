(function () {
    var alreadySignedUp = false;

    var formTitle = window.formTitle;
    var formText = window.formText;
    var tagNameSlug = slugify(window.tagName || 'Registration Wall');
    var localStorageKey = `registration-${tagNameSlug}`;

    // Check if registration data already exists in localStorage
    if (localStorage.getItem(localStorageKey)) {
        return; // Exit the function to avoid creating the modal
    }

    // At the start
    saveViewportSettings();

    // Read Mailchimp tag name from site variable or set to default
    var tagName = window.tagName || 'Registration Wall'; // Use the global variable or default to 'Registration Wall'

    // Create modal elements
    var modal = document.createElement('div');
    modal.id = 'registration-wall';
    modal.className = 'modal';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create function that creates the form
    function createForm(id, titleText, introText, toggleButton, fields, submitButton) {
        var form = document.createElement('form');
        form.id = id || 'registration-form';

        if (titleText) {
            var title = document.createElement('h2');
            title.textContent = titleText;
            title.classList.add('modal-title');
            form.appendChild(title);
        }

        if (introText) {
            var intro = document.createElement('p');
            intro.textContent = introText;
            intro.classList.add('intro-text');
            form.appendChild(intro);
        }

        if (toggleButton) {
            form.appendChild(toggleButton);
            toggleButton.addEventListener('click', function () {
                alreadySignedUp = !alreadySignedUp;

                // Optionally, perform additional actions based on the new value
                if (alreadySignedUp) {
                    // Actions when alreadySignedUp is true
                    console.log('User is already signed up.');
                    // Hide the new registration form
                    document.getElementById('new-registration').style.display = 'none';
                    // Show the existing member form
                    document.getElementById('existing-member').style.display = 'block';
                } else {
                    // Actions when alreadySignedUp is false
                    console.log('User is not signed up.');
                    // Hide the existing member form
                    document.getElementById('existing-member').style.display = 'none';
                    // Show the new registration form
                    document.getElementById('new-registration').style.display = 'block';
                }
            })
        }

        // Append hidden input field to pass on tagName
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'tagName';
        hiddenInput.value = tagName;

        // Append it to your form
        form.appendChild(hiddenInput);

        // Append form fields
        fields.forEach(function (field) {
            var label = document.createElement('label');
            label.htmlFor = slugify(field.id);
            label.textContent = field.label + ':';
            label.className = 'form-label';

            var input = document.createElement('input');
            input.type = field.type;
            input.id = slugify(field.id);
            input.name = field.id;

            // Set required based on the field object
            if (field.required) {
                input.required = true;
            }

            form.appendChild(label);
            form.appendChild(input);
            // form.appendChild(document.createElement('br'));
        });

        var interestsLabel = document.createElement('p');
        interestsLabel.textContent = 'Your Interests:';
        interestsLabel.classList.add('interests-label');
        form.appendChild(interestsLabel);

        // Create a grid div to hold all the checkboxContainer divs
        var grid = document.createElement('div');
        grid.classList.add('interest-grid');
        form.appendChild(grid);

        // Add hidden error message container
        var errorMessage = document.createElement('div');
        errorMessage.id = `error-message-${id}`
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'none';
        errorMessage.classList.add('error-message');
        form.appendChild(errorMessage);

        var interests = window.interests;
        if (interests.length > 0) {
            interests.forEach(function (interest) {
                var checkboxContainer = document.createElement('div');
                checkboxContainer.classList.add('checkbox-container');

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = slugify(interest);
                checkbox.name = 'interests';
                checkbox.value = interest;

                var label = document.createElement('label');
                label.htmlFor = slugify(interest);
                label.textContent = interest;
                label.classList.add('checkbox-label');

                checkboxContainer.appendChild(checkbox);
                checkboxContainer.appendChild(label);
                grid.appendChild(checkboxContainer);
            });
        }

        form.appendChild(submitButton);

        form.addEventListener('submit', async function (event) {
            event.preventDefault();

            // Collect form data
            var formData = new FormData(form);

            // Retrieve the GA Client ID
            const clientId = getGAClientId();

            // Collect checked checkboxes
            var checkedInterests = [];
            document.querySelectorAll(`#${id} input[type="checkbox"]:checked`).forEach(function (checkbox) {
                checkedInterests.push(checkbox.value);
            });

            // Prepare data for sending (convert to JSON)
            var jsonObject = {};
            formData.forEach(function (value, key) {
                jsonObject[key] = value;
            });

            jsonObject['interests'] = checkedInterests; // Add the array of checked interests
            jsonObject['gaClientId'] = clientId; // Add the GA Client ID

            // Check if value "existing" is present
            if (jsonObject.existing === '' || jsonObject.existing) {
                console.log('Existing member, looking up email on Mailchimp');
                jsonObject['existing'] = 'yes';
            }

            // Sign up new member
            try {
                // const response = await fetch('http://localhost:8787', {
                const response = await fetch('https://tnh-registration-wall.admin-f00.workers.dev', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(jsonObject)
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    displayErrorMessage(errorData.error, `error-message-${id}`);
                } else {
                    // Handle successful submission
                    displayErrorMessage("", `error-message-${id}`); // Clear any existing error messages
                    // Save registration progress to localStorage for future use
                    saveRegistrationProgress(jsonObject.email);
                    // Additional logic for successful submission
                    closeModal();
                }
            } catch (error) {
                displayErrorMessage("An error occurred while submitting the form.", `error-message-${id}`);
            }

        });

        modalContent.appendChild(form);
        modal.appendChild(modalContent);
    }

    // Create form for "New"
    var toggleButtonNew = document.createElement('a');
    toggleButtonNew.href = '#';
    toggleButtonNew.textContent = 'Already signed up?';
    toggleButtonNew.classList.add('toggle-button');
    toggleButtonNew.id = 'toggle-button-new';

    // Define form fields
    var formFieldsNew = [
        { label: 'First name *', type: 'text', id: 'firstName', required: true },
        { label: 'Last name *', type: 'text', id: 'lastName', required: true },
        { label: 'Job Title', type: 'text', id: 'jobTitle', required: false },
        { label: 'Organisation', type: 'text', id: 'organisation', required: false },
        { label: 'Your Email *', type: 'email', id: 'email', required: true }
    ];

    var submitButtonNew = document.createElement('input');
    submitButtonNew.type = 'submit';
    submitButtonNew.value = 'Submit';
    submitButtonNew.classList.add('submit-existing-member');

    createForm(
        'new-registration',
        formTitle,
        formText,
        toggleButtonNew,
        formFieldsNew,
        submitButtonNew
    );

    // Create form for "Existing"
    var toggleButtonExisting = document.createElement('a');
    toggleButtonExisting.href = '#';
    toggleButtonExisting.textContent = 'Register with a new email address';
    toggleButtonExisting.classList.add('toggle-button');
    toggleButtonExisting.id = 'toggle-button-existing';

    // Define form fields
    var formFieldsExisting = [
        { label: 'Your Email *', type: 'email', id: 'email', required: true },
        { label: 'Hidden field', type: 'hidden', id: 'existing', required: false },
    ];

    var submitButtonExisting = document.createElement('input');
    submitButtonExisting.type = 'submit';
    submitButtonExisting.value = 'Submit';
    submitButtonExisting.classList.add('submit-new-registration');

    createForm(
        'existing-member',
        "Signed up before?",
        'Please give us your email address so we can check that.',
        toggleButtonExisting,
        formFieldsExisting,
        submitButtonExisting
    );

    // When you need to change settings
    changeViewportSettings();

    // Append modal to body and blur the rest of the content
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // disable body scroll
    var pageContent = document.createElement('div');
    pageContent.id = 'pageContent';
    while (document.body.firstChild !== modal) {
        pageContent.appendChild(document.body.firstChild);
    }
    document.body.insertBefore(pageContent, modal);
    pageContent.style.filter = 'blur(5px)'; // blur effect

    console.log(window.location)
    var styleSheetUrl = window.location.hostname === "localhost" ? "/styles/annotations.css" : "https://api.thenewhumanitarian.org/styles/registration-wall.css";


    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleSheetUrl;

    document.head.appendChild(link);

    /* Helper functions */

    function displayErrorMessage(message, containerId) {
        const errorMessageDiv = document.getElementById(containerId);
        if (message) {
            errorMessageDiv.textContent = message;
            errorMessageDiv.style.display = 'block';
        } else {
            errorMessageDiv.style.display = 'none';
        }
    };

    function closeModal() {
        // Send GA Tracking event "close registration wall modal"
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // re-enable scrolling
        pageContent.style.filter = 'none'; // remove blur
        while (pageContent.firstChild) {
            document.body.appendChild(pageContent.firstChild);
        }
        document.body.removeChild(pageContent);
        // Later, to restore original settings
        restoreOriginalViewportSettings();
    }

    function getGAClientId() {
        const gaCookie = document.cookie.split('; ').find(row => row.startsWith('_ga='));
        return gaCookie ? gaCookie.split('=')[1].split('.').slice(-2).join('.') : null;
    }

    // Slugify Function
    function slugify(text) {
        return text.toString().toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
    }

    // Save Registration Progress Function
    function saveRegistrationProgress(email) {
        const tagNameSlug = slugify(window.tagName || 'Registration Wall');
        const registrationData = {
            tagName: window.tagName || 'Registration Wall',
            timestamp: new Date().toISOString(),
            googleClientId: getGAClientId(),
            email: email
        };

        localStorage.setItem(`registration-${tagNameSlug}`, JSON.stringify(registrationData));
    }

    var originalViewportContent;

    function saveViewportSettings() {
        var viewportMetaTag = document.querySelector('meta[name="viewport"]');
        if (viewportMetaTag) {
            originalViewportContent = viewportMetaTag.content;
        }
    }

    function removeViewportTag() {
        var metaTags = document.getElementsByTagName('meta');
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].name === 'viewport') {
                metaTags[i].parentNode.removeChild(metaTags[i]);
                break;
            }
        }
    }

    function changeViewportSettings() {
        var viewportMetaTag = document.querySelector('meta[name="viewport"]');
        if (!viewportMetaTag) {
            viewportMetaTag = document.createElement('meta');
            viewportMetaTag.name = 'viewport';
            document.head.appendChild(viewportMetaTag);
        }
        viewportMetaTag.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
    }

    function restoreOriginalViewportSettings() {
        var viewportMetaTag = document.querySelector('meta[name="viewport"]');
        if (viewportMetaTag && originalViewportContent) {
            viewportMetaTag.content = originalViewportContent;
        }
    }

})();
