import { ApiProperty } from "@nestjs/swagger";

export class CreateArendDto {
  @ApiProperty({example: '1', description:"id of car"})
  readonly carId: number;
}
