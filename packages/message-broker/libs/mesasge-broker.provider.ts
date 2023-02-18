import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { CHANNELS, DIRECT_EXCHANGE, FANOUT_EXCHANGE, HEADERS_EXCHANGE, TOPIC_EXCHANGE } from './constants';
import { DynamicModule } from '@nestjs/common';
import { config } from "global-config";

export const messageBrokerProvider: DynamicModule = RabbitMQModule.forRoot(RabbitMQModule, {
    uri: config.messageBroker.uri,
    connectionInitOptions: config.messageBroker.connectionInitOptions,
    enableControllerDiscovery: config.messageBroker.enableControllerDiscovery,
    defaultRpcTimeout: config.messageBroker.defaultRpcTimeout,

    defaultExchangeType: TOPIC_EXCHANGE.name,
    exchanges: [
        TOPIC_EXCHANGE,
        DIRECT_EXCHANGE,
        FANOUT_EXCHANGE,
        HEADERS_EXCHANGE,
    ],
    channels: CHANNELS,
});