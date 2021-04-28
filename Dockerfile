FROM node:current-alpine AS builder
COPY . .
RUN yarn install && \
    yarn build && \
    yarn install --production --ignore-scripts --prefer-offline

FROM debian:10-slim

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    curl -s https://install.speedtest.net/app/cli/install.deb.sh | bash - && \
    apt-get update && \
    apt-get install -y nodejs speedtest

COPY --from=builder . .

ENTRYPOINT ["node", "dist/main.js"]