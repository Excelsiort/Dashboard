FROM node:16

LABEL version="1.0"

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]