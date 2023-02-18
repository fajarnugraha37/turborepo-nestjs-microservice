import { RabbitMQChannels } from "@golevelup/nestjs-rabbitmq";

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
    'auth': {
        prefetchCount: 15,
    },
    'gateway': {
        prefetchCount: 15,
    },
    'content': {
        prefetchCount: 15,
    },
    'log': {
        prefetchCount: 15,
    },
};