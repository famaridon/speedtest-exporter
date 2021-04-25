import { Injectable } from '@nestjs/common';
import * as child from 'child_process';
import { PrometheusFormatter } from './prometheus-formatter';
import { Speedtest } from './speedtest-result';

@Injectable()
export class AppService {

  private readonly formatter: PrometheusFormatter;

  constructor() {
    this.formatter = new PrometheusFormatter();
  }

  async run(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      child.exec("speedtest --format=json", (error, stdout, stderr) => {
        if (error) {
          console.log(error);
          return resolve(this.formatter.error());
        } else if (stderr) {
          console.log(error);
          return resolve(this.formatter.error());
        }
        console.log("result is : ");
        console.dir(stdout);
        const speetest: Speedtest = JSON.parse(stdout);
        return resolve(this.formatter.format(speetest));
      });
    });

  }


}
