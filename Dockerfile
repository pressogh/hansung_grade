FROM node:18.2.0

COPY . /app
WORKDIR /app

RUN npm install -g pm2
RUN yarn install

RUN npm run build

COPY /app/build /usr/share/nginx/html/hansung-grade
