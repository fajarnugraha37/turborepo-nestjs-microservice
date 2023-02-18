import { Controller, Get } from "@nestjs/common";
import { BaseClass } from "common-nestjs";
import { StreamLogger } from "message-broker";
import { AmqpConnection } from "message-broker/vendor/golevelup";

@Controller()
export class RootController extends BaseClass {
    constructor(private readonly amqpConnection: AmqpConnection, logger: StreamLogger) {
        super(logger);
    }

    getContext(): string {
        return RootController.name;
    }

    @Get()
    healthCheck(): any {
        this.logger.debug('loggg');
        return {
            statusCode: 200,
            timestamp: new Date().toISOString(),
            message: 'this is gateway',
        };
    }
}