import { Module } from '@nestjs/common';
import { ExperimentService } from './experiment.service';
import { ExperimentController } from './experiment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersTesting } from './entities/users-testing.entity';
import { Users } from './entities/users.entity';

@Module({
  controllers: [ExperimentController],
  imports: [TypeOrmModule.forFeature([UsersTesting, Users])],
  providers: [ExperimentService],
})
export class ExperimentModule {}
