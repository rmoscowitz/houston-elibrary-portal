FROM node

COPY package.json .

RUN npm install

COPY src src
COPY public public

RUN npm run build-frontend

COPY server server

RUN npm run build-backend

CMD npm run prod
