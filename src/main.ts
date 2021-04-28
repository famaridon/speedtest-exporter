import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('speedtest-exporter is listenning on http://localhost:3000')
  await app.listen(3000);
}
bootstrap();


process.on('SIGTERM', function onSigterm() {
  console.log('speedtest-exporter is stopping.')
  process.exit(0);
});