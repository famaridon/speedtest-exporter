FROM node:current-alpine AS builder
COPY . .
RUN yarn install && \
    yarn build && \
    rm -rf node_modules && \
    yarn install --production

FROM debian:stable-slim

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    curl -s https://install.speedtest.net/app/cli/install.deb.sh | bash - && \
    apt-get update && \
    apt-get install -y nodejs speedtest && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder . .

ENTRYPOINT ["npm", "run", "start:prod"] 