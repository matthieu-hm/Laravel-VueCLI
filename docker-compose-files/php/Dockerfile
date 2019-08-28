FROM php:7.3

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update -y && apt-get install -y \
    libmcrypt-dev \
    openssl \
    zip \
    unzip \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN docker-php-ext-install \
    tokenizer \
    mbstring \
    pdo \
    pdo_mysql \
    bcmath \
    pcntl

