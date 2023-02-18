import { Module } from '@nestjs/common';
import { messageBrokerProvider } from './mesasge-broker.provider';

@Module({
  imports: [
    messageBrokerProvider,
  ],
  exports: [
    messageBrokerProvider,
  ],
})
export class MessageBrokerModule { }
