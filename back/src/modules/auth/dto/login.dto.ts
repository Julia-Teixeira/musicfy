import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'E-mail do usuário.',
    type: String,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Senha do usuário.',
    type: String,
  })
  @IsString()
  password: string;
}
