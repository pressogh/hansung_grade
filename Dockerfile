FROM node:18.2.0

COPY . /app
WORKDIR /app

RUN npm install -g pm2
RUN yarn install

RUN npm run build

EXPOSE 3000
USER node
CMD ["pm2-runtime", "start", "npm", "--", "start"]
