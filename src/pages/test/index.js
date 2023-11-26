export const POST = ({ request }) => {
    console.log(request)

    return new Response(JSON.stringify({
        message: "This was a POST!"
    })
    )
}