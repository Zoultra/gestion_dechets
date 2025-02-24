import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   
  private baseURLclient = "http://localhost:3100/api/clients";

  private baseURLchauffeur = "http://localhost:3100/api/chauffeurs";
  
  private baseURLadmin = "http://localhost:3100/api/admins";

  constructor(private httpClient: HttpClient) { }

  
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURLclient}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURLclient}`, user);
  }
  
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURLclient}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURLclient}/${id}`);
  }
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURLclient}/${id}`);
  }

  getChauffeursList(): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURLchauffeur}`);
  }

  getAdminList(): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURLadmin}`);
  }
}

