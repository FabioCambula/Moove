# Moove

Questo progetto nasce come esercitazione su Typescript.

Moove ha lo scopo di fornire soluzioni di micromobilità che siano flessibili, convenienti e rispettose dell'ambiente.
Moove è un’azienda leader nella micro mobilità condivisa. I loro mezzi sono disponibili in 20 città europee. I mezzi messi a disposizione sono bici, scooter e monopattini, tutti elettrici.

## PenCode
Puoi trovare il mio progetto anceh su PenCode! [PenCode](https://codepen.io/FabioCambula/pen/JoPmajZ)


## Descrizione del progetto

-**Interfacce e Classi:**
  Ho scelto di implementare l'interfaccia IMezzo, IUtente, e ICitta per seguire una logica solida di progettazione orientata agli oggetti. Le interfacce mi hanno permesso di definire chiaramente le proprietà e i metodi richiesti per ogni entità, migliorando la manutenibilità e la comprensibilità del codice.

-**Logica di Prenotazione:**
 Ho implementato una logica che impedisce a un utente di prenotare un mezzo se ne ha già uno in uso e una funzione per poter restituire il mezzo. Questo comportamento aiuta a evitare conflitti e garantisce una gestione efficace delle risorse. 

-**Stato del Mezzo:**
 I mezzi sono stati assegnati un "stato" che indica se sono "disponibili" o "in uso". Questo stato è essenziale per la corretta gestione delle prenotazioni e per evitare che più utenti possano prenotare lo stesso mezzo.

-**Test e Verifica:**
  Ogni funzionalità è stata testata per garantire che il sistema si comporti correttamente, inclusa la gestione dei mezzi, la prenotazione, la restituzione e l'aggiunta dei mezzi alle città.


## Tecnologie utilizzate

- **Typescript**


## Come contribuire

Se desideri suggerire miglioramenti o segnalare problemi:
1. Forka il progetto
2. Crea un branch per la tua modifica (`git checkout -b nome-branch`)
3. Effettua un commit delle tue modifiche (`git commit -m 'Descrizione modifica'`)
4. Pusha il branch (`git push origin nome-branch`)
5. Invia una Pull Request

## Licenza

Distribuito sotto la licenza MIT. Consulta [LICENSE](LICENSE.txt) per ulteriori informazioni.

## Contatti

Fabio Cambula  
📧 **Email:** [fabiocambulaa@yahoo.com](mailto:fabiocambulaa@eyahoo.com) 
