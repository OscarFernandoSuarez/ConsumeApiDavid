import { Component, OnInit } from '@angular/core';
import{SolicitudService} from '../solicitud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  paises:any[]=[]
  constructor(private ServicioPaises:SolicitudService){}

  ngOnInit(){
    this.ServicioPaises.getPaises().subscribe(data =>{
      this.paises=data,
      console.log(this.ServicioPaises)
    });
  }
  

}
