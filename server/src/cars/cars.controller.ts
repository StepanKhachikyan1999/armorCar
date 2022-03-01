import { Car } from './cars.model';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./create-car.dto";

@ApiTags("About car api")
@Controller("cars")
export class CarsController {
  constructor(private carrService: CarsService) {}
  @ApiOperation({ summary: "Create Car" })
  @ApiResponse({status:200, type:Car})
  @Post()
  create(@Body() carDto: CreateCarDto) {
    return this.carrService.createCar(carDto);
  }
  @ApiOperation({ summary: "All Cars" })
  @ApiResponse({status:200, type: [Car]})
  @Get()
  getAll() {
    return this.carrService.getAllCars();
  }
}
