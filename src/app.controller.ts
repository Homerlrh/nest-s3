import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { AppService } from './service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
}
