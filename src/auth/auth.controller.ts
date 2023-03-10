import {Body, Controller, HttpCode, HttpStatus, Post, Req} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request } from "express";
import { AuthDto } from "./dto";
@Controller('api/v1/authentication')
export class AuthController{
    constructor( private authService: AuthService){

    }
    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signup(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    async signin(@Body() dto:AuthDto){
        return this.authService.signin(dto)
    }
}