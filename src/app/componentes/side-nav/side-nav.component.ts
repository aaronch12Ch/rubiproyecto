import { Component , OnInit,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  links = [
    {ruta: 'HOME' , url: '/' },
    {ruta: 'NOSOTROS' , url: '/nosotros'},
    {ruta: 'CONTACTO', url: '/contacto' },
    {ruta: 'CATEGORIAS',url: '/categorias'}
]
@Output() CloseSidenav = new EventEmitter<void>();
  constructor() { }
 onClose(){
    this.CloseSidenav.emit();
  }
  ngOnInit(): void {
  }
}
