import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

// This is an example on how the monorepo can works between folders
import { exampleFunction } from '@mks/routes';

import { AppModule } from './app.module';

async function bootstrap() {
  exampleFunction();
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();