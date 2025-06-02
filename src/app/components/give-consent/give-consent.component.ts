import { Component } from '@angular/core';
import { ConsentService } from '../../services/consent.service';
import { User } from '../../models/user';
import { ConsentsTo } from '../../enum/consents';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-give-consent',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './give-consent.component.html',
  styleUrl: './give-consent.component.css'
})
export class GiveConsentComponent {
  consentEnum = ConsentsTo;
  isChecked: boolean = false;
  agreeTo: Array<string> = [];

  constructor(private giveService: ConsentService){}

  consentForm = new FormGroup<User>({
    id: new FormControl(Math.floor(Math.random() * 5) + 1),
    nome: new FormControl(''),
    email: new FormControl(''),
    consented: new FormControl(this.agreeTo)
  });

  submitConsent(): void {
    this.giveService.createUserConsent(this.consentForm.value).subscribe();
  }
  
  teste(e: any): void {
    const checkbox = e.target as HTMLInputElement;
    const value = checkbox.defaultValue;

    if(checkbox.checked && !this.agreeTo.includes(value)) {
      this.agreeTo.push(value);
      this.isChecked = true;
    } else {
      this.agreeTo = this.agreeTo.filter(
        item => item !== value
      )
      this.isChecked = false;
    }
  }
}
