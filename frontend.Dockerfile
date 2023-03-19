FROM node:16-alpine as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm start
ENV REACT_APP_BASE_URL=“https://7sse2sdxc6.eu-central-1.awsapprunner.com ”
EXPOSE 80
CMD npm start
