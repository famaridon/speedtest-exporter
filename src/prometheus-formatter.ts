import { Speedtest } from "./speedtest-result";

export class PrometheusFormatter {

    public format(speedtest: Speedtest): string {
        const labels = this.buildLabels(speedtest);
        let resultBuilder = "# HELP speedtest_download_bandwidth download bandwidth in (bytes/s)\n";
        resultBuilder += "# TYPE speedtest_download_bandwidth gauge\n";
        resultBuilder += `speedtest_download_bandwidth{${labels}} ${speedtest.download.bandwidth}\n`;

        resultBuilder += "# HELP speedtest_upload_bandwidth upload bandwidth in (bytes/s)\n";
        resultBuilder += "# TYPE speedtest_upload_bandwidth gauge\n";
        resultBuilder += `speedtest_upload_bandwidth{${labels}} ${speedtest.upload.bandwidth}\n`;


        resultBuilder += "# HELP speedtest_ping_latency latency (ms)\n";
        resultBuilder += "# TYPE speedtest_ping_latency gauge\n";
        resultBuilder += `speedtest_ping_latency{${labels}} ${speedtest.ping.latency}\n`;

        resultBuilder += "# HELP speedtest_ping_jitter latency (ms)\n";
        resultBuilder += "# TYPE speedtest_ping_jitter gauge\n";
        resultBuilder += `speedtest_ping_jitter{${labels}} ${speedtest.ping.jitter}\n`;

        resultBuilder += this.buildStatus(true);

        return resultBuilder;
    }

    public error(): string {
        return this.buildStatus(false);
    }

    private buildStatus(up: boolean): string {
        const status = up ? '1.0' : '0.0'
        let resultBuilder = "# HELP speedtest_up speedtest_exporter is up(1) or down(0)\n";
        resultBuilder += "# TYPE speedtest_up gauge\n";
        resultBuilder += `speedtest_up ${status}\n`;
        return resultBuilder;
    }

    private buildLabels(speedtest: Speedtest): string {
        const server = speedtest.server;
        return `server_id="${server.id}",server_name="${server.name}",server_country="${server.country}"`;
    }
}