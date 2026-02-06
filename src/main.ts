import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for Vue frontend (assuming it runs on port 3000 or 8080 usually, but allowing all for template)
  app.enableCors({
    origin: true, // or specific URL like 'http://localhost:5173' for Vite/Vue
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
