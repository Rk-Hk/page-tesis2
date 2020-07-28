import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEstructCurso } from '../interfaces/struct.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoDetailService {

  cursoDetail: BehaviorSubject<IEstructCurso> = new BehaviorSubject<IEstructCurso>(null); 

  constructor( private _http: HttpClient ) {
  }

  getCurso = () : Observable<any> => {
    return this._http.get('./assets/mock/struct.json').pipe();
  }

  setCursoSelected = (value) => {
    this.cursoDetail.next(value);
    localStorage.setItem("tesisDetail", JSON.stringify(value));
  }
}
