import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para que el front-end (React / Vite) pueda conectarse
  app.enableCors({
    origin: '*', 
  });

  // Establecer el prefijo global /api para todas las rutas
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();