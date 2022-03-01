import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table,Model } from "sequelize-typescript";


interface CarCreationAttrs {
    carNumber: string;
    mark: string;
}


@Table({ tableName: "cars" })
export class Car extends Model<Car,CarCreationAttrs> {
  @ApiProperty({example: '1', description:"unique id"})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: '28ac288', description:"car number"})
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull:false
  })
  carNumber: string;

  @ApiProperty({example: 'opel', description:"car mark"})
  @Column({
    type: DataType.STRING,
    allowNull:false
  })
  mark: string;

  @ApiProperty({example: 'true', description:"have ared or no"})
  @Column({
    type: DataType.BOOLEAN,
    defaultValue:false
  })
  arenda: boolean;

  @ApiProperty({example: '28.05.2022', description:"start of arendind"})
  @Column({
    type: DataType.STRING,
  })
  start: string;

  @ApiProperty({example: '29.05.2022', description:"end of arendind"})
  @Column({
    type: DataType.STRING,
  })
  finish: string;

  @ApiProperty({example: '500', description:"all time car payd"})
  @Column({
    type: DataType.INTEGER,
  })
  allPayed: number;

  @ApiProperty({example: '2500', description:"present car payd"})
  @Column({
    type: DataType.INTEGER,
  })
  thisPays: number;
}
