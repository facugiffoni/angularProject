import { Component, OnInit } from '@angular/core';
import { MiPaginaService } from 'src/app/misServicios/mi-pagina.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit{
  MiPagina:any;
  constructor(private datosMiPagina:MiPaginaService){ }

  ngOnInit():void{
  this.datosMiPagina.obtenerDatos().subscribe(data=>{
    console.log(data);
    this.MiPagina=data;
  });
}
}
