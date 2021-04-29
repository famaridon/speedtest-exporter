<p align="center">
  <a href="https://github.com/famaridon/speedtest-exporter" target="blank"><img src="https://raw.githubusercontent.com/famaridon/speedtest-exporter/master/logo.svg" width="320" alt="Speedtest Logo" /></a>
</p>
  
  <p align="center">A simple prometheus speedtest exporter based on the official speedtest cli.</p>


![GitHub package.json version](https://img.shields.io/github/package-json/v/famaridon/speedtest-exporter)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/famaridon/speedtest-exporter/CI)
![GitHub](https://img.shields.io/github/license/famaridon/speedtest-exporter)
![Docker Image Size (latest semver)](https://img.shields.io/docker/image-size/famaridon/speedtest-exporter?sort=semver)


## Description

This project is inspierd by : https://github.com/jeanralphaviles/prometheus_speedtest

I just want to use the official speedtest cli tool.

This project is based on :
* [speedtest cli](https://www.speedtest.net/fr/apps/cli)
* [NestJs](https://nestjs.com/)

## TODO 

* [ ] write features
* [ ] write usage 
* [ ] keep version upto dates
* [ ] write integration test to be safe on speedtest cli updates.

## Features

* [x] expose /probes with metrics
* [ ] change port options
* [ ] map all speedtest cli option 
* [ ] add option to map --accept-license --accept-gdpr

## Usage

TODO

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
