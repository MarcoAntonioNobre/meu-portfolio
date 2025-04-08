# Etapa 1: Build do frontend (Vite)
FROM node:18 AS frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: PHP + Apache
FROM php:8.2-apache

# Instala extensões necessárias
RUN apt-get update && apt-get install -y \
    git unzip curl libpng-dev libonig-dev libxml2-dev zip libzip-dev libpq-dev \
    && docker-php-ext-install pdo pdo_mysql zip

# Ativa o mod_rewrite do Apache
RUN a2enmod rewrite

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Define o diretório de trabalho
WORKDIR /var/www/html

# Copia os arquivos do projeto
COPY . .

# Copia os arquivos compilados do Vite para a pasta pública
COPY --from=frontend /app/public/build ./public/build

# Instala dependências PHP
RUN composer install --no-dev --optimize-autoloader

# Ajusta permissões
RUN chown -R www-data:www-data storage bootstrap/cache

# Expõe a porta do Apache
EXPOSE 10000

CMD ["apache2-foreground"]
