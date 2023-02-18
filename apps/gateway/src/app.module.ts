import { Module } from '@nestjs/common';
import { AllExceptionFilterProvider } from './shared/all.exception-filter.provider';
import { SharedModule } from './shared/shared.module';
import { ForumController } from './controller/forum.controller';
import { LogController } from './controller/log.controller';
import { PostController } from './controller/post.controller';
import { RootController } from './controller/root.controller';
import { UserController } from './controller/user.controller';

@Module({
  imports: [
    SharedModule,
  ],
  providers: [
    AllExceptionFilterProvider,
  ],
  controllers: [
    ForumController,
    LogController,
    PostController,
    RootController,
    UserController,
  ],
})
export class AppModule {}
