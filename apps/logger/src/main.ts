import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { service } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.listen(service.port, () => console.log(`app start at port ${service.port}`));
}
bootstrap();
