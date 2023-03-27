export class ChatGptBot {
    constructor(apiKey) { 
        this.apiKey = apiKey
        let { Configuration, OpenAIApi } = require("openai")
        let configuration = new Configuration({apiKey: this.apiKey,})
        this.openai = new OpenAIApi(configuration)
    }
    
    async sendToGPT (chats){
        let completion = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            max_tokens: 1000,
            messages: chats,
            top_p:0.8,
        })
        return completion
    }
}
