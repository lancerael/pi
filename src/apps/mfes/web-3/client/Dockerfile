FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN sed -i 's/"workspace:\^"/"\*"/g' package.json

RUN npm install

COPY . .

RUN npm run build:mfe

EXPOSE 4000:4000

CMD ["npm", "run", "preview"]