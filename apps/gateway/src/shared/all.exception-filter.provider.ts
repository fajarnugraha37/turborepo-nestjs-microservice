

import { FactoryProvider } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { AllExceptionFilter } from 'common-nestjs';
import { StreamLogger } from 'message-broker';

export const AllExceptionFilterProvider: FactoryProvider<AllExceptionFilter> = {
    provide: 'APP_FILTER',
    useFactory: async (httpAdapterHost: HttpAdapterHost, logger: StreamLogger) => {
        const connection = new AllExceptionFilter(httpAdapterHost, logger);
        return connection;
    },
    inject: [HttpAdapterHost, StreamLogger],
};