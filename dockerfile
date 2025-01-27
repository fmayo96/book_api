FROM node:14 

WORKDIR /
COPY package.json .
RUN npm install 

COPY . . 

RUN npm i -g typescript
CMD ["tsc", "node ./build/db.js", "&&", "npm",  "run",  "dev"] %fix this
