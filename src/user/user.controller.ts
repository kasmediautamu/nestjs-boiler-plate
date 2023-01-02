import { Body, Controller,Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { GetUser } from '../auth/decorator'
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { EditUserDto } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('api/v1/users')
export class UserController {
   constructor(private userService: UserService){

   }
    @Get('profile')
    getMe(@GetUser() user:User, @GetUser('email') email:string){
        console.log('email')
        return user;
    }

    @Patch()
    editUser(
        @GetUser('id') userId: number,
        @Body() dto: EditUserDto){
    return this.userService.editUser(userId,dto)
        }
}
