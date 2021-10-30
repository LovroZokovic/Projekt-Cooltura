FROM node:14.18.1-alpine3.14

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]

EXPOSE 8080