FROM node:14 

WORKDIR /
COPY package.json .
RUN npm install 

COPY . . 

RUN npm i -g typescript
CMD ["npm",  "run",  "dev"]
