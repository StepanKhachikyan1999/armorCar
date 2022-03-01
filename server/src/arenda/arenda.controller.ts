import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { Arenda } from "./arenda.model";
import { ArendaService } from "./arenda.service";
import { CreateArendDto } from "./create-arend.dto";

@Controller("arenda")
export class ArendaController {
  constructor(private carrService: ArendaService) {}
  @ApiOperation({ summary: "Create Arend" })
  @ApiResponse({ status: 200, type: Arenda })
  @Post()
  create(@Body() carDto: CreateArendDto) {
    return this.carrService.createArend(carDto);
  }

  @ApiOperation({ summary: "All Arends" })
  @ApiResponse({ status: 200, type: [Arenda] })
  @Get()
  getAll() {
    return this.carrService.getAllArends();
  }
}
