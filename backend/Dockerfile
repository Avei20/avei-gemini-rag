FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM oven/bun:latest AS production

COPY --from=builder /app .

CMD [ "yarn", "start:prod" ]
