import { Global, Module } from '@nestjs/common';
import { MessageBrokerModule, StreamLogger } from 'message-broker';

@Global()
@Module({
  imports: [
    MessageBrokerModule,
  ],
  providers: [
    StreamLogger,
  ],
  exports: [
    MessageBrokerModule,
    StreamLogger,
  ],
})
export class SharedModule { }