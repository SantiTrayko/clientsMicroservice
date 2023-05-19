FROM node:16.15.0
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY . .

RUN npm cache clean --force

RUN npm install
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]