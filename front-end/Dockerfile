FROM	  node:alpine

WORKDIR	/var/html/app

ENV     CHOKIDAR_USEPOLLING=true

# Getting yarn
RUN		  apk update && apk add yarn && chmod 770 .

COPY    . .

CMD   	yarn && yarn start

# It requires your app to listen on the port 3000
EXPOSE  3000
