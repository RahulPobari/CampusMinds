import { client } from "@/configs/NilePostgresConfig";

export async function POST(request: Request) {
    const { content, imageUrl, visibleIn, email } = await request.json();

    await client.connect();

    const result = await client.query(`insert into post values(DEFAULT,'${content}','${imageUrl}','${visibleIn}',DEFAULT,'${email}')`)

    await client.end();

    return Response.json(result);

}