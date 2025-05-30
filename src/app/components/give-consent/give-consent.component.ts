import { Component, inject } from '@angular/core';
import { ConsentService } from '../../services/consent.service';
import { User } from '../../models/user';
import { ConsentsTo } from '../../enum/consents';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-give-consent',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './give-consent.component.html',
  styleUrl: './give-consent.component.css'
})
export class GiveConsentComponent {
  consentEnum = ConsentsTo;
  agreeTo: Array<string> = [];

  constructor(private giveService: ConsentService){}

  // private newUser: User = {
  //   id: Math.floor(Math.random() * 5) + 1,
  //   nome: "Felipe Antônio",
  //   email: "felipe@antonio.com",
  //   consented: [
  //     ConsentsTo.Receive
  //   ]
  // };

  consentForm = new FormGroup<User>({
    id: new FormControl(Math.floor(Math.random() * 5) + 1),
    nome: new FormControl(''),
    email: new FormControl(''),
    consented: new FormControl(this.agreeTo)
  });

  getUser(): void {
    this.giveService.createUser(this.consentForm.value).subscribe((response) => {
      console.log(response);
    });
  }
  
  teste(e: any): void {
    if(e.target.checked) {
      this.agreeTo.push(e.target.defaultValue);
    }
    console.log(this.consentForm.value);
  }
}
