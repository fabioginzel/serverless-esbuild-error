FROM node:14-alpine

RUN apk add --no-cache \
        python3 \
        py3-pip \
    && pip3 install --upgrade pip \
    && pip3 install --no-cache-dir \
        awscli \
    && rm -rf /var/cache/apk/*


RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN npm install -g serverless

COPY --chown=node:node package*.json ./

USER node

COPY --chown=node:node . .

RUN npm install


EXPOSE 3000


CMD [ "npm", "start" ]