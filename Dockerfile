FROM node

WORKDIR /app

COPY . .

RUN npm i --legacy-peer-deps

CMD [ "npm", 'run' ]
ENTRYPOINT [ "dev" ]

EXPOSE 3000