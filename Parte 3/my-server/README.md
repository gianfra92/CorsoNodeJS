# JsonWebToken Server

Server per la gestione del JWT tramite token nel header authorization (Testare con postman e settare authorization a BearerToken).
Eseguire l'installazione attraverso il comando: 

    npm install

Eseguire il server tramite il comando: 

    npm start

Il server rimane in ascolto all'indirizzo localhost:3000
***

Il server gestisce due percorsi **GET /home** e **POST /login**
        
- Chiamando il server al percorso di seguito si ha accesso alla home solo se si è correttamente autenticati

        GET /home

- Chiamando il server al percorso di seguito richiesto il login

        POST /login
        BODY
            {
                "username": "<USERNAME_PERSONA>",
                "password": "<PASSWORD_PERSONA>"
            }