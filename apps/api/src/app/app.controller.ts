import { Controller, Get } from '@nestjs/common';

import { Message } from '@dtp-cm/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('hi')
  getHi() {
    return { msg: 'test docker devcontainer' };
  }
}
