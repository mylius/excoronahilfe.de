# excoronahilfe.de

## Initializing both projects

Make sure you have nodejs installed:

  For distros using pacman: 
  
  ```pacman -S nodejs npm```
    
  Distros using apt-get:
  
  ```
  curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

For the client, run the following in a terminal :
```
cd client
npm install
```

For the server, run the following in a terminal :
```
cd server
npm install
```

## Running the Client for development

In a terminal run:
```
cd client
npm run serve
```

## Running the Client for development

In a terminal run:
```
cd server
npm run dev
```

## Deploying the client

In a terminal run:
```
cd client
npm run build
```
Upload the contents of ./client/dist to the /var/www/html/excoronahilfe.de/ directory

## Deploying the server

Upload the contents of ./server to the /opt/node_server/ directory.

In the terminal run ```screen -ls```, and then run ```screen -r $number_of_the_active_session```.
Execute ```sh /opt/node_server/run.sh```
