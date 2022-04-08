# ib-assigment

start project with:

`docker-compose up`

Endpoints:

    GET http://localhost:5000 > returns all URLs from DB
    POST http://localhost:5000/shrinker?url=someUrl > POST to backend Full URL
    GET http://localhost:5000/:shorturl > redirect to full(real) URL from provided short URL

Frontend:

    start script npm strat from root of frontend directory
    address: http://localhost:3000

ToDo:

    fix dependecies
    better exception handling
    ~~ add env variables for backend and mongodb connectio string ~~
    add secret for user / passwords
    disable adding existing url
