import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('log')
export class LogController {
// export class LogController extends BaseClass {
//     constructor(private readonly amqpConnection: AmqpConnection, private readonly prismaAppService: PrismaAppService, logger: StreamLogger) {
//         super(logger);
//     }

    getContext(): string {
        return LogController.name;
    }

    @Get()
    healthCheck(@Req() request: Request): any {
        return {
            statusCode: 200,
            timestamp: new Date().toISOString(),
            message: `domain ${request.url} is up`,
            data: {
                params: request.params,
                query: request.query,
                body: request.body,
                headers: request.headers,
            }
        };
    }
}