FROM node:18-alpine

WORKDIR /BACKEND

COPY package.json /BACKEND/package.json
COPY package-lock.json /BACKEND/package-lock.json
RUN npm i
COPY . /BACKEND

EXPOSE 3306

CMD ["node", "server.js"]


