FROM	  node:alpine

WORKDIR	/usr/app

ENV     CHOKIDAR_USEPOLLING=true

# Getting yarn
RUN		  apk update && apk add yarn && chmod 770 .

COPY    . .

CMD   	yarn && yarn dev

# It requires your app to listen on the port 4200
EXPOSE  4200
