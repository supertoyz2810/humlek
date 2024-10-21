import { NextResponse } from "next/server";
import connect from "../../../../../lib/db";
import User from "../../../../../lib/models/user";

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), {status: 200});
    } catch (error: any) {
        return new NextResponse("Error " + error.message, {
            status: 500,
        });
    }
};

export const POST = async (request: Request) => {
    try {
        const body = await request.json();
        await connect();
        const newUser = new User(body);
        await newUser.save();
        return new NextResponse(JSON.stringify({message: "User is created", user: newUser}), {
            status: 200
        });
    } catch (error: any) {
        return new NextResponse("Error is create user " + error.message, {
            status: 500,
        });
    }
};