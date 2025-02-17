import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   
  private baseURL = "http://localhost:3100/users/ajouter";
  private baseURL2 = "http://localhost:3100/users/liste";
  private baseURL3 = "http://localhost:3100/users/recherche";
  private baseURL4 = "http://localhost:3100/users/update";

  constructor(private httpClient: HttpClient) { }

  
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL2}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, user);
  }
  
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL4}/${id}`, user);
  }

  deleteUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL3}/${id}`);
  }
}

