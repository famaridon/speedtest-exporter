FROM debian:10-slim

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    curl -s https://install.speedtest.net/app/cli/install.deb.sh | bash - && \
    apt-get update && \
    apt-get install -y nodejs speedtest && \
    apt-get remove -y curl && \
    rm -rf /var/lib/apt/lists/*

COPY . .

ENTRYPOINT ["node", "dist/main.js"]