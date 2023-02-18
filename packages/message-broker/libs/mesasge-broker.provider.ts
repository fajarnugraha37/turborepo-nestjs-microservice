import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { CHANNELS } from './message-broker.channel';
import { 
    DEFAULT_EXCHANGE, DIRECT_EXCHANGE, 
    FANOUT_EXCHANGE, HEADERS_EXCHANGE, 
    MATCH_EXCHANGE, RABBITMQ_TRACE_EXCHANGE, 
    TOPIC_EXCHANGE 
} from './message-broker.exchange';
import { DynamicModule } from '@nestjs/common';
import { config } from "global-config";

export const messageBrokerProvider: DynamicModule = RabbitMQModule.forRoot(RabbitMQModule, {
    uri: config.messageBroker.uri,
    connectionInitOptions: config.messageBroker.connectionInitOptions,
    enableControllerDiscovery: config.messageBroker.enableControllerDiscovery,
    defaultRpcTimeout: config.messageBroker.defaultRpcTimeout,

    defaultExchangeType: TOPIC_EXCHANGE.name,
    exchanges: [
        DEFAULT_EXCHANGE,
        DIRECT_EXCHANGE,
        FANOUT_EXCHANGE,
        HEADERS_EXCHANGE,
        MATCH_EXCHANGE,
        RABBITMQ_TRACE_EXCHANGE,
        TOPIC_EXCHANGE,
    ],
    channels: CHANNELS,
});