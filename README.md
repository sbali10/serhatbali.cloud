### On main directory
docker-compose up --build -d


### You can access it from 

http://localhost:8085

## Nginx

http://localhost:80



### Other Options

### On main directory
docker build -t my-react-app .
docker run -p 8085:80 -d my-react-app



### On /nginx directory
docker build -t mynginx .
docker run -d --name nginx-base -p 80:80 mynginx