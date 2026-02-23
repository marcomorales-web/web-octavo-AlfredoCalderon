import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-leyendas',
  standalone: true,
  imports: [RouterLink], 
  templateUrl: './leyendas.component.html',
  styleUrl: './leyendas.component.css'
})
export class LeyendasComponent {}