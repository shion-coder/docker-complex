FROM node:16.7.0-alpine3.11 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install && npm cache clean --force
COPY . .

RUN npm run builder

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html