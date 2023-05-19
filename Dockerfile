FROM node:16.15.0
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./

# RUN npm cache clean --force

RUN npm install
COPY . .
# RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:migrate:prod"]