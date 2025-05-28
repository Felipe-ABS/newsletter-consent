import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiveConsentComponent } from "./components/give-consent/give-consent.component";
import { CollectedConsentsComponent } from "./components/collected-consents/collected-consents.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GiveConsentComponent, CollectedConsentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
