FROM node:18.14.2-alpine as builder

ENV WDS_SOCKET_PORT=0 \
    GENERATE_SOURCEMAP=false \
    NODE_ENV=production

WORKDIR /app

COPY ./package.json ./
RUN npm install --omit=dev

COPY . .
RUN npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 3000
