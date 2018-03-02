import { User } from './interfaces/user.interface';
import { Controller, Get, Res, Req } from '@nestjs/common';
import { environment } from '../../environments/environment';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getCurrentUser(@Req() request, @Res() response): Promise<User[]> {
    console.log('Session: ', request.session);

    return this.usersService.findAll();
  }
}
