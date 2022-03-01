import { Car } from './cars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  imports:[
    SequelizeModule.forFeature([Car])
  ]
})
export class CarsModule {}
