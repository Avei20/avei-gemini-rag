FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json .
COPY *.lockb . 

RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest AS production

COPY --from=builder /app .

CMD [ "bun", "run", "start:prod" ]
