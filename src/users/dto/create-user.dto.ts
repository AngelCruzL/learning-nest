import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  // * For optional fields, use @ApiPropertyOptional() or
  // @ApiProperty({ required: false })
  // age?: number;
}
