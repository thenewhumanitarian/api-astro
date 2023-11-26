export const POST = async ({ request }) => {
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*", // Allows all origins
      "Content-Type": "application/json"
    });
    
    // Your existing code
    return new Response(JSON.stringify({ message: "This was a POST!" }), { headers });
  };