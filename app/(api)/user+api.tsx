import { client } from "@/configs/NilePostgresConfig"

export async function POST(request: Request) {

    const { name, email, image } = await request.json();

    await client.connect();

    const result = await client.query(`
        INSERT INTO USERS VALUES(DEFAULT,'${name}','${email}','${image}')
        `)
    await client.end();

    return Response.json(result);
}


export async function GET(request: Request) {
    const email = new URL(request.url).searchParams.get('email');


    try {

        await client.connect();
        const result = await client.query(`select * from users where email='${email}'`)
        await client.end();

        return Response.json(result.rows[0]);

    } catch (e) {
        return Response.json({ error: e })
    }
}