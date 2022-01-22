import { Client } from "./structures/Client";
import { config } from "dotenv";

config();

const token: string = process.env.TOKEN;

const client: Client = new Client(
    { intents: ["GUILDS", "GUILD_MESSAGES"] }, 
    token
);

client.start();
