import { Injectable } from '@angular/core';
import { Poubelle } from '../../models/poubelle';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PoubelleService {
 
  private baseURLPoubelle = "http://localhost:3100/api/poubelles";

  constructor(private httpClient: HttpClient) { }

  
  getPoubelleList(): Observable<Poubelle[]>{
    return this.httpClient.get<Poubelle[]>(`${this.baseURLPoubelle}`);
  }

  createPoubelle(poubelle: Poubelle): Observable<Object>{
    return this.httpClient.post(`${this.baseURLPoubelle}`, poubelle);
  }

  
  updatePoubelle(id: number, poubelle: Poubelle): Observable<Object>{
    return this.httpClient.put(`${this.baseURLPoubelle}/${id}`, poubelle);
  }

  deletePoubelle(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLPoubelle}/${id}`);
  }
  getPoubelleById(id: number): Observable<Poubelle>{
    return this.httpClient.get<Poubelle>(`${this.baseURLPoubelle}/${id}`);
  }
}
