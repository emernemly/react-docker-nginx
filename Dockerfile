# as builder nista3mlouha ki bch nahbtou projet en production ma3naha hadha just builder bch ntal3a folder build 
FROM node:18 as builder
WORKDIR /app
RUN apt update && \
    apt install git -y

RUN git clone https://github.com/emernemly/MERN_Contact_project.git .
RUN npm i -y
#=> na7itha 5ater 9bal habet node module fi github 
RUN npm run build
#ENV PORT 3000
#EXPOSE ${3000}
#CMD ["npm" , "start"]
#taw na7an habtna node w 3malna folder app fih clone mta3 projet w node module w 3amlana build 
#tawa bch n7ot build fi nginx 
 FROM nginx as production
 #hadhi ki yabda 3andek env
 ENV NODE_ENV production
 #bch na3mel copy ll folder build fi file affichage fi nginx 
 COPY --from=builder /app/build : /usr/share/nginx/html
 ENV PORT 80
 EXPOSE ${PORT}
 #start nginx
 CMD ["nginx" , "-g" , "daemon off;"]