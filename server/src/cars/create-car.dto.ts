import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
  @ApiProperty({example: '28ac228', description:"number of car"})
  readonly carNumber: string;
  @ApiProperty({example: 'opel', description:"mark of car"})
  readonly mark: string;
}
