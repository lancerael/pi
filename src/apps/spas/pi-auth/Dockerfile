FROM node:18

WORKDIR /usr/app

COPY package*.json ./

RUN sed -i 's/"workspace:\^"/"\*"/g' package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173:4173

CMD ["npm", "run", "preview"]