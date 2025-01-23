interface IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  id: number;
  stato: string;
  assegnaUtente(utente: IUtente): void;
}
interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  mezzoAttuale: IMezzo | null;
  prenotaMezzo(mezzo: IMezzo): void;
  restituisciMezzo(): void;
}
interface ICitta {
  citta: string;
  mezzi: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}
//Classi

class Mezzo implements IMezzo {
  tipo: "bici" | "scooter" | "monopattino";
  id: number;
  stato: string;
  constructor(
    tipo: "bici" | "scooter" | "monopattino",
    id: number,
    stato: string
  ) {
    this.tipo = tipo;
    this.id = id;
    this.stato = stato;
  }
  assegnaUtente(utente: IUtente): void {
    if (this.stato === "disponibile") {
      this.stato = "in uso";
      console.log(
        `Il mezzo di tipo ${this.tipo} con ID ${this.id} è stato assegnato a ${utente.nome} ${utente.cognome}.`
      );
    } else {
      console.log(
        `Il mezzo di tipo ${this.tipo} con ID ${this.id} non è disponibile.`
      );
    }
  }
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  mezzoAttuale: IMezzo | null = null;
  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }
  prenotaMezzo(mezzo: IMezzo): void {
    if (this.mezzoAttuale !== null) {
      console.log(
        `${this.nome} ${this.cognome} ha già un mezzo in uso (${this.mezzoAttuale.tipo}).`
      );
      return;
    }
    if (mezzo.stato === "disponibile") {
      mezzo.stato = "in uso";
      this.mezzoAttuale = mezzo;
      console.log(
        `Il mezzo di tipo ${mezzo.tipo} con ID ${mezzo.id} è stato prenotato con successo da ${this.nome} ${this.cognome}.`
      );
    } else {
      console.log(
        `Il mezzo di tipo ${mezzo.tipo} con ID ${mezzo.id} non è disponibile al momento.`
      );
    }
  }
  restituisciMezzo(): void {
    if (this.mezzoAttuale) {
      console.log(
        `${this.nome} ${this.cognome} ha restituito il mezzo di tipo ${this.mezzoAttuale.tipo} con ID ${this.mezzoAttuale.id}.`
      );
      this.mezzoAttuale.stato = "disponibile";
      this.mezzoAttuale = null;
    } else {
      console.log(
        `${this.nome} ${this.cognome} non ha alcun mezzo da restituire.`
      );
    }
  }
}

class Citta implements ICitta {
  citta: string;
  mezzi: IMezzo[] = [];
  constructor(citta: string) {
    this.citta = citta;
  }
  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezzi.push(mezzo);
    console.log(
      `Il mezzo di tipo ${mezzo.tipo} è stato aggiunto alla città ${this.citta}.`
    );
  }
}

//test
//inserimento nuovi utenti
const utente1 = new Utente(
  "Mario",
  "Rossi",
  "mariarossi@example.com",
  "Carta di credito"
);
const utente2 = new Utente(
  "Maria",
  "gialli",
  "mariagiallii@example.com",
  "Apple Pay"
);
const utente3 = new Utente(
  "Giovanni",
  "Verdi",
  "gioverdi@example.com",
  "Paypal"
);
const utente4 = new Utente(
  "Anna",
  "Bianchi",
  "annabianchi@example.com",
  "carta di credito"
);

//inserimento mezzi
const mezzo1 = new Mezzo("bici", 1, "disponibile");
const mezzo2 = new Mezzo("bici", 2, "disponibile");
const mezzo3 = new Mezzo("bici", 3, "disponibile");
const mezzo4 = new Mezzo("bici", 4, "disponibile");
const mezzo5 = new Mezzo("bici", 5, "disponibile");
const mezzo6 = new Mezzo("scooter", 6, "disponibile");
const mezzo7 = new Mezzo("scooter", 7, "disponibile");
const mezzo8 = new Mezzo("scooter", 8, "disponibile");
const mezzo9 = new Mezzo("scooter", 9, "disponibile");
const mezzo10 = new Mezzo("scooter", 10, "disponibile");
const mezzo11 = new Mezzo("monopattino", 11, "disponibile");
const mezzo12 = new Mezzo("monopattino", 12, "disponibile");
const mezzo13 = new Mezzo("monopattino", 13, "disponibile");
const mezzo14 = new Mezzo("monopattino", 14, "disponibile");
const mezzo15 = new Mezzo("monopattino", 15, "disponibile");
//aggiunta delle città

const citta1 = new Citta("Roma");
const citta2 = new Citta("Parigi");
const citta3 = new Citta("Barcellona");

//aggiunta mezzi alle città
citta1.aggiungiMezzo(mezzo1);
citta1.aggiungiMezzo(mezzo2);
citta1.aggiungiMezzo(mezzo6);
citta1.aggiungiMezzo(mezzo7);
citta1.aggiungiMezzo(mezzo11);
citta2.aggiungiMezzo(mezzo12);
citta2.aggiungiMezzo(mezzo13);
citta2.aggiungiMezzo(mezzo3);
citta2.aggiungiMezzo(mezzo4);
citta2.aggiungiMezzo(mezzo8);
citta3.aggiungiMezzo(mezzo9);
citta3.aggiungiMezzo(mezzo10);
citta3.aggiungiMezzo(mezzo14);
citta3.aggiungiMezzo(mezzo15);
citta3.aggiungiMezzo(mezzo5);

console.log(citta2.mezzi);

//prenotazione

utente1.prenotaMezzo(mezzo12);
utente3.prenotaMezzo(mezzo7);

//test prenotazione doppia

utente1.prenotaMezzo(mezzo2);

//restituzione
utente1.restituisciMezzo();
utente1.prenotaMezzo(mezzo2);
