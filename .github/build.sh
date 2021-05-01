#!/usr/bin/env bash

docker build -t famaridon/speedtest-exporter:latest .

docker push famaridon/speedtest-exporter:latest

