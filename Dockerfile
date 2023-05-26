FROM node:20-alpine3.16
WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]