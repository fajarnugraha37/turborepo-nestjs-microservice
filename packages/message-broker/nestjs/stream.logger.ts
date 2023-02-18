import { ConsoleLogger, Injectable, LogLevel, Scope } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { TOPIC_EXCHANGE } from '../libs/message-broker.exchange';

@Injectable({ scope: Scope.TRANSIENT })
export class StreamLogger extends ConsoleLogger {
    constructor(private readonly amqpConnection: AmqpConnection) {
        super();
    }

    log(message: any, ...optionalParams: any[]) {
        this.stream('log', message, optionalParams);
    }

    error(message: any, ...optionalParams: any[]) {
        this.stream('error', message, optionalParams);
    }

    warn(message: any, ...optionalParams: any[]) {
        this.stream('warn', message, optionalParams);
    }

    debug(message: any, ...optionalParams: any[]) {
        this.stream('debug', message, optionalParams);
    }

    verbose(message: any, ...optionalParams: any[]) {
        this.stream('verbose', message, optionalParams);
    }

    private stream(logLevel: LogLevel, message: any, ...optionalParams: any[]) {
        const timestamp = new Date();
        this.amqpConnection.publish(
            TOPIC_EXCHANGE.name, 
            'log.' + logLevel, 
            {
                timestamp: timestamp,
                type: logLevel.toUpperCase(),
                message: this.stringifyMessage(`[NEST] ${timestamp.toUTCString()} ${logLevel.toUpperCase()} [${this.context}] ${message}`, logLevel), 
                // params: {
                //     context: this.context,
                //     ...optionalParams,
                // },
            });
    }
}