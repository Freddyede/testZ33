import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { getCors } from './common/config/cors.config';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule, getCors());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap().then();
