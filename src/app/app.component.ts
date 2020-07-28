import { Component, OnInit } from '@angular/core';
import { CursoDetailService } from './services/curso-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'page-tesisII';
  pageStruct : any ;

  constructor( private _cursoDetailService: CursoDetailService) {

  }

  
 
  ngOnInit( ) {
    this._cursoDetailService.getCurso().subscribe(
      response => {
        this._cursoDetailService.setCursoSelected(response);
      },
      error => console.log("ERROR GET DETAIL : ", error)
    )
  }
}
