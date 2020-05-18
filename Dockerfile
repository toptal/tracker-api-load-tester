FROM node:12-slim

WORKDIR /load-tester
COPY package.json yarn.lock .
RUN yarn install
COPY . .
CMD ["yarn", "start"]
