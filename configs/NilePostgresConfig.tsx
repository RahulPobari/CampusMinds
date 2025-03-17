import { Client } from 'node-postgres'


export const client = new Client({
    user: "0195a341-72fe-711a-9951-e8e12af2e613",
    password: "5f9226c1-43fb-4d70-b562-454f07d9d6d2",
    host: "us-west-2.db.thenile.dev",
    port: 5432,
    database: "project",
});

