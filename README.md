# nodexprs
Node Express project incl back- &amp; frontend 

## To run the application

`cd backend/node`

`docker images`

Remove the production image if necessary

`docker rmi nodexprs-dkr-img-prod`

`docker build --target production -t nodexprs-dkr-img-prod .`

`docker run -itd --rm -p 8080:8080 --name nodexprs-dkr-cntnr-prod nodexprs-dkr-img-prod`

`docker ps -a`

`docker container logs nodexprs-dkr-cntnr-prod`

`curl http://localhost:8080/about`

`docker kill --signal=SIGINT nodexprs-dkr-cntnr-prod`

The development target

`docker build --target dev -t nodexprs-dkr-img-dev .`

`docker run -itd --rm -p 8081:8081 --name nodexprs-dkr-cntnr-dev nodexprs-dkr-img-dev`

`curl http://localhost:8081/about`

Postgres 16 Docker container

`cd backend/postgres`

`docker rmi pg16`

`docker build -t pg16 .`

`docker run -itd --rm -p 5432:5432 -e POSTGRES_PASSWORD=pwd --name pg16-dkr-img pg16`
