import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  public stringVar = new Subject<String>();



  value : String;
  
getObservable(): Subject<String>{
    return this.stringVar;
  }
  
  
public setValue(newStringVar : String){
    this.stringVar.next(newStringVar);
  }
}
