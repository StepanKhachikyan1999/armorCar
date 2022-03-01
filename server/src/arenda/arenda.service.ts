import { Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Arenda } from "./arenda.model";
import { CreateArendDto } from "./create-arend.dto";
@Injectable()
export class ArendaService {
  constructor(@InjectModel(Arenda) private arendaRepository: typeof Arenda) {}

  async createArend(dto: CreateArendDto) {
    const areded = await this.arendaRepository.create(dto);
    
    return areded;
  }

  async getAllArends() {
    const users = await this.arendaRepository.findAll();
    return users;
  }
}
