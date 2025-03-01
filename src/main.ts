import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    // origin: ['http://localhost:8081', 'http://localhost:58944 '],
    origin: true,
  });
  await app.listen(3002);
}

bootstrap();
