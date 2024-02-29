import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        // Get the value of the 'OutSiteJWT' cookie
        const cookie = request.cookies.get('OutSiteJWT');

        if (cookie) {
            request.cookies.delete('OutSiteJWT');

            // console.log(request.cookies.get('OutSiteJWT')); // Should output undefined
            return NextResponse.json({ command: 1, msg: 'logout success' });
        } else {
            // If the cookie doesn't exist, return a JSON response indicating no cookie found
            return NextResponse.json({ command: 0, msg: 'no cookie found' });
        }
    } catch (e) {
        // If an error occurs, log the error and return an internal server error response
        console.error('Error:', e);
        return NextResponse.error('Internal Server Error');
    }
};