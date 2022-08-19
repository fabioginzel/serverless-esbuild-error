import EventManager from "../../application/service/EventManager";
import DomainEvent from "../../domain/event/DomainEvent";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";



export default class EventManagerSns implements EventManager {
    protected client : SNSClient;
    
    constructor() {
        this.client = new SNSClient({ 
            region: process.env.AWS_REGION,
            endpoint: process.env.AWS_SNS_ENDPOINT ?? undefined });
    }

    async publish(event: DomainEvent): Promise<void> {
        await this.client.send(new PublishCommand({
            TopicArn: process.env.AWS_SNS_TOPIC_ARN,
            Message: JSON.stringify(event),
            MessageAttributes: {
                'event': {
                    DataType: 'String',
                    StringValue: event.name
                  }
            }
        }));
    }
    
}