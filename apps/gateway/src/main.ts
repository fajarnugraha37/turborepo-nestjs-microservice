import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';
import { AppModule } from './app.module';
import { service } from './shared/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ 
    transform: true, 
    whitelist: true,
    transformOptions: {
      enableImplicitConversion: true,
    }
  }));
  app.use(
    bodyParser.json(), 
    bodyParser.urlencoded({ extended: true })
  );

  app.listen(service.port, () => console.log(`app start at port ${service.port}`));
}
bootstrap();
