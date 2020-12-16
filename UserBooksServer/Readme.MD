// Creare un server per la gestione di utenti e libri
// Router /auth     
//              POST    /register       Creazione di un utente                      ( nessuna autenticazione necessaria )
// Router /books
//              GET     /       ?id     tramite id ricavarsi i dettagli di un libro
//              GET     /list           ricavarsi la lista di libri appartenenti all'utente
//              POST    /               inserimento di un nuovo libro legato all'utente
// Router /user                                                                     (senza autenticazione)
//              GET     /list           ricaviamo la lista di utenti registrati     
//              GET     /       ?id     ricaviamo i dati di un utente

// Autenticazione con Basic Auth
// models  
//          Book        {_id, 
//                        title:String, 
//                        Author:String, 
//                        userId:String}
//          User        {_id, 
//                      firstname, 
//                      lastname, 
//                      username, 
//                      password}