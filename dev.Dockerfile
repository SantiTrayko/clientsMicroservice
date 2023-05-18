FROM node:16.15.0
WORKDIR /pinApp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "app.js"]