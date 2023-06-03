import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/login')
  login(@Body() body: any) {
    return this.appService.login(body);
  }

  @Post('/register')
  register(@Body() body: any) {
    return this.appService.register(body);
  }
}
