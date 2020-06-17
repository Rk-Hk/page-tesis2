import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'page-tesisII';
  pageStruct : any ;

  constructor(
    // private _http: HttpClient
  ) {
    
  }

  // getStruct(){
  //   this._http.get('./assets/mock/struct.json').pipe().subscribe(data => {
  //     this.pageStruct = data;
  //   });
  // }
 
  ngOnInit( ) {
    // this.getStruct()
  }

}
