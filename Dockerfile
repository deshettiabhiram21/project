FROM python:3.12

WORKDIR /sam

COPY . /sam

EXPOSE 8081

CMD ["python", "app.py"]

week 12

FROM node:20

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
