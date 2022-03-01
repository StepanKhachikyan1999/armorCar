import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarsModule } from './cars/cars.module';
import {Car} from './cars/cars.model';
import { ArendaModule } from './arenda/arenda.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env'
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Car],
      autoLoadModels:true
    }),
    CarsModule,
    ArendaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
