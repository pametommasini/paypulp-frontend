FROM node:16-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
ENV REACT_APP_BASE_URL=“https://7sse2sdxc6.eu-central-1.awsapprunner.com”
RUN npm run build
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]