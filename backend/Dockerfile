FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn build

FROM node:22-alpine AS production

COPY --from=builder /app .

CMD [ "yarn", "start:prod" ]
