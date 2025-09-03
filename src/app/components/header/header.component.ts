import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome = "Daniel"
  getNome(){
    return this.nome;
  }
 
  titulo = "Clean Code"
  getTitulo(){
    return this.titulo;
  }
}

