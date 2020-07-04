import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public buscarUsuario(idUsuario: string): void {
    console.log('idUsuario:', idUsuario);
    if (!!idUsuario) {
      this.router.navigate(['/usuario', idUsuario]);
    }
  }
}
