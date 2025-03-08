# Стадия 1: Сборка приложения
FROM node:20 AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build

# Стадия 2: Финальный образ
FROM node:20-alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/wait-for-it.sh

# Указываем команды по умолчанию: запускаем миграции и стартуем сервер
CMD ["sh", "-c", "/app/wait-for-it.sh postgres:5432 -- yarn run db:migrate && yarn run start:prod"]
