# Meteo Server

Server per la gestione del meteo

Eseguire l'installazione attraverso il comando: 

    npm install

Eseguire il server tramite il comando: 

    npm start
Il server rimane in ascolto all'indirizzo localhost:3000
***

Il server gestisce due percorsi **/meteo** e **/city**

- Chiamando il server al percorso di seguito restituisce i dati del meteo per la citta specificata in formato JSON

        GET /meteo?city=<NOME_CITTA>
        
- Chiamando il server al percorso di seguito restituisce la lista delle città chiamate in precedenza

        GET /city/list

- Chiamando il server al percorso di seguito tramite l'id della citta desiderata cancella la citta dalla cronologia delle ricerce

        DELETE /city?id=<ID_CITTA>