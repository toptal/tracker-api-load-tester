FROM node:12

WORKDIR .

COPY . .

RUN npm install