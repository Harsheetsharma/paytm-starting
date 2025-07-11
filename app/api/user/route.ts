import { getServerSession } from "next-auth"
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";
export const GET = async () => {
    const session = await getServerSession(authOptions);
    if (session) {
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
        message: "You are not logged in"
    }, {
        status: 403
    })
}