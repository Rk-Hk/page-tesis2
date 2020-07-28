import { Component, OnInit } from '@angular/core';
import { CursoDetailService } from 'src/app/services/curso-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  curso:any = null;
  constructor( private _cursoDetailService: CursoDetailService) { }

  ngOnInit() {
    this._cursoDetailService.cursoDetail.subscribe(
      response => {
        this.curso = localStorage.getItem('tesisDetail') ? JSON.parse(localStorage.getItem('tesisDetail')): response;
      }
    )
    
    console.log("CURSO : ", this.curso);
    
  }

}
