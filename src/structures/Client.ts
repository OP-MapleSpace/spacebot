import { Client as DiscordClient, ClientOptions } from "discord.js";

class Client extends DiscordClient{
    public constructor(options: ClientOptions, token: string) {
        super(options);
    
        this.login(token);
    }

    start() {
        
        this.on("ready", () => {

            console.log(`${this.user.tag} is observing the Unobservable Universe!`)
        });

        this.on("messageCreate", message => {
            if (message.author.bot) return;

            if(message.content === "spacebot") message.reply("Hello, want to join me Observing the Unobservable Universe?");
            
        });

    }
}

export { Client };
