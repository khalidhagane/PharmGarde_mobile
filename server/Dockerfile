FROM node

RUN npm install -g nodemon

WORKDIR /server

COPY . .

RUN npm install

CMD ["npm", "start"]