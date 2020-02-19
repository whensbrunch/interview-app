# Question Answering Frontend


You can run the frontend in development mode using
```
npm start
```

To develop the frontend against a running backend, consider starting the backend by running
```
cd .. && docker-compose up
```
The webpack configuration forwards api requests to the port that docker-compose exposes for the backend by default.