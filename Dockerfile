FROM node:slim
WORKDIR /usr/src/app
COPY . ./
RUN apt-get update && apt-get upgrade -y && apt-get install dpkg fakeroot python3 python3-pip python3-setuptools make g++ libgtk-3-0 libnss3 libgbm-dev libasound2 -yq --no-install-suggests --no-install-recommends
RUN npm install
RUN npm run make

RUN rm -rf node_modules/ ./package-lock.json ./package.json ./index.js ./forge.config.js ./out/make
RUN mv out/*/** ./
RUN rm -rf out/

CMD service dbus start && su node -c './electron-docker'
