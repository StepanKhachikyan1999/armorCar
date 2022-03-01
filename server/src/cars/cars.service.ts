import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from './cars.model';
import { CreateCarDto } from './create-car.dto';

@Injectable()
export class CarsService {


    constructor(@InjectModel(Car) private carRepository: typeof Car){}
   
    async createCar(dto:CreateCarDto) {
        const car = await this.carRepository.create(dto);
        return car;
    }


    async getAllCars() {
        const users = await this.carRepository.findAll();
        return users;
    }


}
