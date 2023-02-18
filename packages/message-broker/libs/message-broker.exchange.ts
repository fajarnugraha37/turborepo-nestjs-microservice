import { RabbitMQExchangeConfig } from "@golevelup/nestjs-rabbitmq";

export enum BUILT_IN_EXCHANGE {
    default = 'amq.default',
    direct = 'amq.direct',
    fanout = 'amq.fanout',
    headers = 'amq.headers',
    match = 'amq.match',
    rabbitmq_trace = 'amq.rabbitmq.trace',
    topic = 'amq.topic',
}

export const DEFAULT_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.default',
    type: 'direct',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const DIRECT_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.direct',
    type: 'direct',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const FANOUT_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.fanout',
    type: 'fanout',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    },
};

export const HEADERS_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.headers',
    type: 'headers',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const MATCH_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.match',
    type: 'headers',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const RABBITMQ_TRACE_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.rabbitmq.trace',
    type: 'headers',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const TOPIC_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'service.topic',
    type: 'topic',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};