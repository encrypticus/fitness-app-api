# Используем официальный Node.js образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json
COPY package.json ./

# Копируем yarn.lock
COPY yarn.lock ./

# Устанавливаем зависимости
RUN yarn

# Копируем все файлы проекта
COPY . .

# Копируем wait-for-it.sh
COPY wait-for-it.sh /app/wait-for-it.sh

# Делаем скрипт исполняемым
RUN chmod +x /app/wait-for-it.sh

# Указываем команды по умолчанию: запускаем миграции и стартуем сервер
CMD ["sh", "-c", "/app/wait-for-it.sh postgres:5432 -- yarn run db:migrate && yarn run start:prod"]
