import { client } from "@/configs/NilePostgresConfig";

export async function GET(request:Response) {
    await client.connect();

    const result=await client.query(`select * from clubs order by name asc`);

    await client.end();

    return Response.json(result.rows)
}