import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      // port: 7788,
      // url: 'tcp://localhost:3001"',
    },
  });
  await app.startAllMicroservices();
  await app.listen(7788); //https://stackoverflow.com/questions/64940682/how-can-a-nestjs-app-listen-on-the-same-port-as-a-connected-microservice
}
bootstrap();
