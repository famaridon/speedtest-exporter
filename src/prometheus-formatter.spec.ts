import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusFormatter } from './prometheus-formatter';
import { Speedtest } from './speedtest-result';

describe('AppController', () => {
  let formatter: PrometheusFormatter;

  beforeAll(async () => {
    formatter = new PrometheusFormatter();
  });

  describe('format', () => {
    it('should return prometheus metrics', () => {

      const speedtest: Speedtest = {
        type: "result",
        timestamp: "2021-04-25T20:12:32Z",
        ping: {
          jitter: 2.7629999999999999,
          latency: 14.295999999999999
        },
        download: {
          bandwidth: 2092593,
          bytes: 25302464,
          elapsed: 12408
        },
        upload: {
          bandwidth: 110882,
          bytes: 869760,
          elapsed: 8406
        },
        isp: "SFR",
        interface: {
          internalIp: "192.168.60.101",
          name: "wlp1s0",
          macAddr: "1C:ZZ:B5:F8:61:ZZ",
          isVpn: false,
          externalIp: "90.89.89.138"
        },
        server: {
          id: 30993,
          name: "SFR",
          location: "Venissieux",
          country: "France",
          host: "lyo1.speedtest.mire.sfr.net",
          port: 8080,
          ip: "62.39.228.5"
        },
        result: {
          id: "df1ade5b-b1a6-443a-b5f0-e3042c7d4915",
          url: "https://www.speedtest.net/result/c/df1ade5b-b1a6-443a-b5f0-e3042c7d4915"
        }
      };

      const output = formatter.format(speedtest);

      expect(output).toBe(
        `# HELP speedtest_download_bandwidth download bandwidth in (bytes/s)
# TYPE speedtest_download_bandwidth gauge
speedtest_download_bandwidth{server_id="30993",server_name="SFR",server_country="France"} 2092593
# HELP speedtest_upload_bandwidth upload bandwidth in (bytes/s)
# TYPE speedtest_upload_bandwidth gauge
speedtest_upload_bandwidth{server_id="30993",server_name="SFR",server_country="France"} 110882
# HELP speedtest_ping_latency latency (ms)
# TYPE speedtest_ping_latency gauge
speedtest_ping_latency{server_id="30993",server_name="SFR",server_country="France"} 14.296
# HELP speedtest_ping_jitter latency (ms)
# TYPE speedtest_ping_jitter gauge
speedtest_ping_jitter{server_id="30993",server_name="SFR",server_country="France"} 2.763
# HELP speedtest_up speedtest_exporter is up(1) or down(0)
# TYPE speedtest_up gauge
speedtest_up 1.0
`);
    });
    it('should return prometheus metrics in case of error', () => {
      const output = formatter.error();

      expect(output).toBe(
        `# HELP speedtest_up speedtest_exporter is up(1) or down(0)
# TYPE speedtest_up gauge
speedtest_up 0.0
`);

    });
  });
});
