import { Component, inject } from '@angular/core';
import { GiveConsentService } from '../../services/give-consent.service';
import { User } from '../../models/user';
import { ConsentsTo } from '../../enum/consents';

@Component({
  selector: 'app-give-consent',
  standalone: true,
  imports: [],
  templateUrl: './give-consent.component.html',
  styleUrl: './give-consent.component.css'
})
export class GiveConsentComponent {
  constructor(private giveService: GiveConsentService){}
  // private giveService = inject(GiveConsentService);

  private newUser: User = {
    id: Math.floor(Math.random() * 5) + 1,
    nome: "Felipe Antônio",
    email: "felipe@antonio.com",
    consented: [
      ConsentsTo.Receive
    ]
    };
  getUser() {
    this.giveService.createUser(this.newUser).subscribe((response) => {
      console.log(response);
    });
  }
}
