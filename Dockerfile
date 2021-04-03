FROM node:current-buster

RUN apt-get update && \
apt-get install -qy \
    python3.7 \
    python3-pip \
    software-properties-common

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

RUN pip3 install -r /app/server/recog/yolov5/requirements.txt

CMD ["node","server/server.js"]


