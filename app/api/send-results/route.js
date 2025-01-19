export async function POST(request) {
  try {
    const body = await request.json();

    // Log the incoming data for debugging
    console.log("Incoming request body:", body);

    const { email, results } = body;

    if (!email || !results) {
      return new Response("Invalid request. Missing email or results.", { status: 400 });
    }

    // Simulate email sending
    console.log("Sending email to:", email);
    console.log("Results:", results);

    return new Response("Results sent successfully!", { status: 200 });
  } catch (error) {
    console.error("Error in send-results API:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}