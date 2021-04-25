import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  home(): string {
    return `
      <ul>
        <li><a href="/probes" >probes</a></li>
      </ul>
      `;
  }

  @Get("/probes")
  @Header('Cache-Control', 'none')
  @Header('Content-Type', 'text/plain')
  async probs(): Promise<string> {
    return await this.appService.run();
  }
}
