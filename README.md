# nodexprs
Node Express project incl back- &amp; frontend 

## To run the application

`cd backend/node`

`docker build --target production -t nodexprs-dkr-img-prod .`

`docker run -itd --rm -p 8080:8080 --name nodexprs-dkr-cntnr-prod nodexprs-dkr-img-prod`

`docker ps -a`

`docker container logs nodexprs-dkr-cntnr-prod`

`curl http://localhost:8080/about`

`docker kill --signal=SIGINT nodexprs-dkr-cntnr-prod`
