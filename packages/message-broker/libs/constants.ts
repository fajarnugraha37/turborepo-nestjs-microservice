import { RabbitMQExchangeConfig, RabbitMQChannels } from "@golevelup/nestjs-rabbitmq";

export const TOPIC_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'topic_exchange',
    type: 'topic',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const DIRECT_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'direct_exchange',
    type: 'direct',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export const FANOUT_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'fanout_exchange',
    type: 'fanout',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    },
};

export const HEADERS_EXCHANGE: RabbitMQExchangeConfig = {
    name: 'headers_exchange',
    type: 'headers',
    createExchangeIfNotExists: true,
    options: {
        durable: true,
    }
};

export enum CHANNEL_NAME {
    default = 'default',
    user = 'user',
    post = 'post',
    forum = 'forum',
    log = 'log',
}

export const CHANNELS: RabbitMQChannels = {
    'default': {
        prefetchCount: 15,
        default: true,
    },
    'user': {
        prefetchCount: 15,
    },
    'post': {
        prefetchCount: 15,
    },
    'forum': {
        prefetchCount: 15,
    },
    'log': {
        prefetchCount: 15,
    },
};

export enum QUEUE_NAME {
    EventSource = 'event-source-queue',
    LogWriter = 'log-writer-queue',
    LogRead = 'log-read-queue',
    LogNotification = 'log-notification-queue',
    
    userRegister = 'user-register-queue',
    userLogin = 'user-login-queue',
    userLogout = 'user-logout-queue',
}

export enum ROUTING_KEY {
    LogRead = 'read.log',
}