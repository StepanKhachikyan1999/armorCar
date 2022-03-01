import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT
  const app = await NestFactory.create(AppModule,{ cors: true });
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle("armor car")
  .setDescription("Project for armor car")
  .setVersion("1.0.0")
  .addTag('meekz')
  .build()

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('/docs', app, document)
  await app.listen(PORT, ()=> console.log(`server start on port ${PORT}`));
}
bootstrap();
