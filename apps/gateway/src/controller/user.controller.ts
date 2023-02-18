import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('user')
export class UserController {
// export class UserController extends BaseClass {
//     constructor(private readonly amqpConnection: AmqpConnection, private readonly prismaAppService: PrismaAppService, logger: StreamLogger) {
//         super(logger);
//     }

    getContext(): string {
        return UserController.name;
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