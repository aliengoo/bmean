#!/usr/bin/env bash

# prevent provisioning running again
if [ -f "/var/vagrant_provision" ]; then
  exit 0
fi

sudo apt-get -y install software-properties-common python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get -y update
sudo apt-get -y install mongodb-org
sudo apt-get -y install nodejs
sudo npm install nodemon -g
sudo npm install forever -g

touch /var/vagrant_provision