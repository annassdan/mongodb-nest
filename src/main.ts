import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = 9000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* setup dokumentasi swagger */
  const opt = new DocumentBuilder()
    .setTitle('My Mongo')
    .setDescription('Aplikasi Nest Mongo')
    .setVersion('1.0.0.')
    .build();
  const doc = SwaggerModule.createDocument(app, opt);
  SwaggerModule.setup('apidoc', app, doc);
  /**/
  app.enableShutdownHooks();

  await app.listen(port);
  console.log(`Application is listening on port ${port}...`)
}
bootstrap().catch(() => {});
