FROM node:14 

ARG NODE_ENV
ARG STRAPI_TOKEN

ENV HOST 0.0.0.0 
ENV NODE_ENV=${NODE_ENV}
ENV STRAPI_TOKEN=${STRAPI_TOKEN}

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]




