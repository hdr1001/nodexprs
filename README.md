# nodexprs
Node Express project incl back- &amp; frontend 

## To run the application

`cd backend/node`

`docker build -t nodexprs-dkr-img .`

`docker run -itd --rm -p 8080:8080 --name nodexprs-dkr-cntnr nodexprs-dkr-img`

`docker ps -a`

`docker container logs nodexprs-dkr-cntnr`

`curl http://localhost:8080/about`

`docker kill --signal=SIGINT nodexprs-dkr-cntnr`
