import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config';
import { ExperimentModule } from './experiment/experiment.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), ExperimentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
