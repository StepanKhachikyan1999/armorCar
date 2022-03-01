import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Table,Model } from "sequelize-typescript";


interface CarArendAttrs {
    carId: number;
}


@Table({ tableName: "arenda" })
export class Arenda extends Model<Arenda,CarArendAttrs> {
  @ApiProperty({example: '1', description:"car unique id"})
  @Column({
    type: DataType.INTEGER,
    unique: true,
  })
  carId: number;

}
