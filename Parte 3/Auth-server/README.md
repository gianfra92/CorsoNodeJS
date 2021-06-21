# BasicAuth Server

Server per la gestione del'autenticazione basic tramite username e password nel header authorization (Testare con postman e settare authorization a basicAuth).
Eseguire l'installazione attraverso il comando: 

    npm install

Eseguire il server tramite il comando: 

    npm start

Il server rimane in ascolto all'indirizzo localhost:3000
***

Il server gestisce due percorsi **POST /** e **/lista**
        
- Chiamando il server al percorso di seguito restituisce la lista delle persone inserite nel sistema

        GET /lista

- Chiamando il server al percorso di seguito viene inserita una nuova persona nel sistema

        POST /
        BODY
            {
                "name": "<NOME_PERSONA>",
                "username": "<USERNAME_PERSONA>",
                "password": "<PASSWORD_PERSONA>"
            }