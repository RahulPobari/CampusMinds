import { client } from "@/configs/NilePostgresConfig";

export async function POST(request:Request) {

    const {clubId,u_email} = await request.json();

    await client.connect();

    const result = await client.query(`insert into clubfollowers values
        (DEFAULT,'${clubId}','${u_email}')`);

    await client.end();

    return Response.json(result);
}


export async function GET(request:Request) {
    const u_email = new URL(request.url).searchParams.get('u_email');

    await client.connect();

    const result = await client.query(`select * from clubfollowers where u_email='${u_email}'`);

    await client.end();

    return Response.json(result.rows);

}