FROM node:18-alpine

WORKDIR /FRONTEND

COPY package.json /FRONTEND/package.json
COPY package-lock.json /FRONTEND/package-lock.json
RUN npm i
COPY . /FRONTEND

EXPOSE 5173

CMD ["npm", "run", "dev"]


