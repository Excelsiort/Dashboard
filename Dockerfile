FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm uninstall bcrypt

RUN npm install bcrypt

EXPOSE 8080

CMD [ "npm", "start" ]