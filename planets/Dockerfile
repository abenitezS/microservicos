FROM node:16

WORKDIR /app

COPY package*.json ./ 

COPY pnpm-lock.yaml ./ 

RUN npm install

COPY . . 

EXPOSE 8003

CMD [ "npm","start" ]