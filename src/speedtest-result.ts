export type Speedtest = {
    type: string;
    timestamp: string;
    ping: Ping;
    download: Download;
    upload: Upload;
    isp: string;
    interface: Interface;
    server: Server;
    result: Result
}

export type Ping = {
    jitter: number;
    latency: number;
}

export type Download = {
    bandwidth: number;
    bytes: number;
    elapsed: number;
}

export type Upload = {
    bandwidth: number;
    bytes: number;
    elapsed: number;
}

export type Interface = {
    internalIp: string;
    name: string;
    macAddr: string;
    isVpn: boolean;
    externalIp: string;
}

export type Server = {
    id: number;
    name: string;
    location: string;
    country: string;
    host: string;
    port: number;
    ip: string;
}

export type Result = {
    id: string;
    url: string;
}