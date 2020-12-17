    Esercizio per la gestione di un Hotel
    Un Hotel deve gestire un certo numero di camere e la prenotazione di esse

    L'hotel deve gestire la prenotazioni delle camere nelle date di occupazione
    *Ogni camera avrà un numero massimo di occupanti e un numero minimo

    Le classi necessarie saranno Camera, Utente(Cliente, Personale), Prenotazione
    Servizi per il personale dovranno gestire la creazione di una camera, e visualizzazione delle camere occupate e le camere libere
    nonchè la visualizzazione delle prenotazioni fatte

    Servizi per il Cliente dovranno gestire la prenotazione di una camera e la visualizzazione delle camere disponibili

    Ogni prenotazione 
        avrà questi campi {_id:(default), 
                            idCamera, 
                            idUtente ,
                            nOccupanti, 
                            dataPrenotazione        https://mongoosejs.com/docs/tutorials/dates.html
                        }
    Ogni gli utenti 
        avranno questi campi: {_id:(default), 
                                    nome, 
                                    cognome, 
                                    username, 
                                    password, 
                                    role('user','admin')        https://mongoosejs.com/docs/validation.html
                                }
    Le Camere 
        avranno questi campi: {_id:(default), 
                                minOccupanti, 
                                maxOccupanti, 
                                tipoCamera:['Suite','Junior','Business']    https://mongoosejs.com/docs/validation.html
                            }
    Classe Access 
        per gestire l'Accesso (refresh_token, idUtente)
    
    *Per semplicità le prenotazioni saranno effettutate solo per un giorno

    Prevedere i percorsi per 
    /auth 
        login, 
        logout, 
        registrazione(sia utente che admin),
        token(per refresh token) 

    /reservation
        prenota
        visualizza camere libere per giorno     (totaleCamere - totalePrenotazioni)
        modifica prenotazione
        annulla prenotazione
    
    /admin
        visualizza prenotazioni (listaPrenotazioni)
        visualizza camere (libere o occupate(totaleCamere - totalePrenotazioni))
    collegamento con mongoDB