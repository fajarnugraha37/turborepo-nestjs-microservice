
import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, ConsoleLogger } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { JsonErrorDto } from './json-error.dto';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost, private readonly logger: ConsoleLogger) {
        this.logger.setContext(AllExceptionFilter.name);
    }

    catch(exception: unknown, host: ArgumentsHost): void {
        const { httpAdapter } = this.httpAdapterHost;
        const ctx = host.switchToHttp();

        const httpStatus = exception instanceof HttpException
            ? exception.getStatus()
            : HttpStatus.INTERNAL_SERVER_ERROR;
        const path = httpAdapter.getRequestUrl(ctx.getRequest());
        const method = httpAdapter.getRequestMethod(ctx.getRequest());
        const request = ctx.getRequest();

        const responseBody: JsonErrorDto<unknown> = {
            statusCode: httpStatus,
            timestamp: new Date().toISOString(),
            path: path,
        };

        const detail: {[key: string]: string | undefined} = {};
        if(exception instanceof Error) {
            detail.message = exception.message;
            detail.stack = exception.stack;
            detail.name = exception.name;
        }

        this.logger.error(`${httpStatus} ${method} ${path} ${JSON.stringify(detail)} ${JSON.stringify({ url: request.url, query: request.query, body: request.body })}`);
        httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
    }
}