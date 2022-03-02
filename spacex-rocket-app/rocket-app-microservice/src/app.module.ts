import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RocketController } from './Rocket/rocket.controller';
import { RocketService } from './Rocket/rocket.service';

@Module({
  imports: [],
  controllers: [AppController, RocketController],
  providers: [AppService, RocketService],
})
export class AppModule {}
