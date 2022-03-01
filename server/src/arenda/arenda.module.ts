import { Module } from '@nestjs/common';
import { ArendaService } from './arenda.service';
import { ArendaController } from './arenda.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Arenda } from './arenda.model';

@Module({
  providers: [ArendaService],
  controllers: [ArendaController],
  imports:[
    SequelizeModule.forFeature([Arenda])
  ]
})
export class ArendaModule {}
