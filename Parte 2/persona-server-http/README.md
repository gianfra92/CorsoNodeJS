# Persona Server HTTP

Server per la gestione della classe Persona

**Il server utilizza la libreria nativa http perciò non ha bisogno di installazione**

Eseguire il server tramite il comando: 

    npm start
Il server rimane in ascolto all'indirizzo localhost:3000
***

Il server gestisce tre percorsi **GET-POST /** e **/lista**
- Chiamando il server al percorso di seguito viene restituita l'ultima persona inserita

        GET /
        
- Chiamando il server al percorso di seguito restituisce la lista delle persone inserite nel sistema

        GET /lista

- Chiamando il server al percorso di seguito viene inserita una nuova persona nel sistema

        POST /
        BODY
            {
                "nome": "<NOME_PERSONA>",
                "cognome": "<COGNOME_PERSONA>"
            }