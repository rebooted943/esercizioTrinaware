import { Component, Input } from '@angular/core';
import { ServiceAuthService } from '../services/service-auth.service';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';
import { Utente } from '../models/utente.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  // @Input() email = '';
  // @Input() password = '';


  // constructor(private auth: ServiceAuthService, private db: DbService){

  // }

  // stampaUtenti(){
  //   this.db.stampaUtenti();
  // }

  // logga(){
  //   console.log('logga component')
  //   this.auth.logga(this.email, this.password);
  // }

  utenti: Utente[];
  apiUrl = 'http://localhost:3000/utenti';
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.getUtenti().subscribe(utenti => {
      const utenteTrovato = utenti.find(utente => utente.email === this.email && utente.password === this.password);
      if (utenteTrovato) {
        console.log('Login effettuato con successo');
        // Esegui azioni aggiuntive o reindirizzamenti dopo il login
        //aggiungere reindirizzamento alla home
        // this.router.navigate(['/dashboard']);
      } else {
        //pulisci i campi e fai reinserire
        console.log('Credenziali di accesso non valide');
      }
    });
  }

  getUtenti() {
    return this.http.get<Utente[]>(this.apiUrl);
  }

  

}