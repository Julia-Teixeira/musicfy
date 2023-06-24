import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.controller';
import { LoginDTO } from './dto/login.dto';

@ApiTags('login')
@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: LoginDTO) {
    return this.authService.login(user.email);
  }
}
