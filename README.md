# SYSTEM SETUP #

## Pre-Requisites ##
node version 8.9.4
mysql version 5.7


```
#!shell
nvm install 8.9.4
nvm use 8.9.4
npm install -g mysql
npm install -g sequelize-auto

```

# CODE SETUP #
## Get the repository ##
```
#!shell
git clone <THIS_PROJECT_GIT_URL>

```

## Install packages ##

```
#!shell

npm install

```

# DB SETUP #
## Login to mysql ##


# DB SETUP #
```
#!shell

mysql -u root -p
create user 'fasoos'@'localhost' identified by 'fasoos'
drop database fasoos
create database fasoos
grant all privileges on fasoos.* to 'fasoos'@'localhost' with grant option
exit;
mysql -u fasoos -pfasoos fasoos < db/schema.sql

sequelize-auto -o "./models" -d fasoos -h localhost -u fasoos -p 3306 -x fasoos -e mysql

```
# RUN #
## Start server on command line ##

```
#!shell

npm start

```
## Access Application on port 3000 ##
