"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRETE_KEY;

export const tokenProvider =  async() => {
    const user = await currentUser();

    if(!user) throw new Error('user is  not logged in');
    if(!apiKey) throw new Error('NO API KEY');
    if(!apiSecret) throw new Error('NO API SECRET');

    const client = new StreamClient(apiKey, apiSecret);
}