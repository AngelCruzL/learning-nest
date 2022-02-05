import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(12)
  name: string;
  // * For optional fields, use @ApiPropertyOptional() or
  // @ApiProperty({ required: false })
  // age?: number;
}
