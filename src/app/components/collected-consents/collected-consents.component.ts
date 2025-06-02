import { Component, OnInit, computed, signal } from '@angular/core';
import { ConsentService } from '../../services/consent.service';

@Component({
  selector: 'app-collected-consents',
  standalone: true,
  imports: [],
  templateUrl: './collected-consents.component.html',
  styleUrl: './collected-consents.component.css'
})
export class CollectedConsentsComponent implements OnInit{
  constructor(private consentService: ConsentService) {}
  data = signal<any>([]);
  currentPage = signal(1);
  itensPerPage = 2;

  ngOnInit() {
    this.consentService.getUserConsents().subscribe((res) => {
      this.data.set(res);
    },
    (err) => {
      console.error("Não foi possível encontrar usuários: ", err.message);
    })
  }

  totalPages = computed(() => Math.ceil(this.data().length / this.itensPerPage));

  paginatedUsers = computed(() => {
    const start = (this.currentPage() -1) * this.itensPerPage;
    return this.data().slice(start, start + this.itensPerPage);
  })

  paginaAnterior() {
    this.currentPage.update(p => p - 1);
  }

  proximaPagina() {
    this.currentPage.update(p => p + 1);
  }
}
