FROM node:18-alpine

RUN apk add --no-cache bash
# Ter disponível na imagem a CLI do nestJs
RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app