FROM node:10.2.1

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i -g babel-cli
RUN npm i --only=production
RUN npm i babel-plugin-transform-runtime
COPY . .
RUN npm run build
RUN rm -rf src
RUN npm uninstall -g babel-cli
RUN npm uninstall babel-plugin-transform-runtime
ENV NODE_ENV production
ENV PORT 80
CMD ["npm", "run", "start:prod"]
