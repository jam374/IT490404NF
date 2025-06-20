#!/usr/bin/env bash

# Update and upgrade packages
sudo apt update
sudo apt upgrade -y

# Install essential packages
sudo apt install -y zip
sudo apt install -y php
sudo apt install -y nano
sudo apt install -y composer
sudo apt install -y rabbitmq-server
sudo apt install -y net-tools

# Enable and start RabbitMQ
sudo systemctl enable rabbitmq-server
sudo systemctl start rabbitmq-server

# Install and start OpenSSH Server
sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl start ssh

# Download and unzip IT490 project
wget https://github.com/MattToegel/IT490/archive/refs/heads/master.zip
unzip master.zip
cd IT490-master/
composer update
