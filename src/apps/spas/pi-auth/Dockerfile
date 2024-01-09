FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173:5173

CMD ["npm", "run", "dev"]