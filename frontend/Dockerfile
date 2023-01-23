FROM node

WORKDIR /frontend

RUN cd web

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]