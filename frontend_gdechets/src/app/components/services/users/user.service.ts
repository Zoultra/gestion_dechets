import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   
  private baseURL = "http://localhost:8080/gdechets/user";
  

  constructor(private httpClient: HttpClient) { }

  
  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, User);
  }
  
  updateUser(userId: number, appUser: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${userId}`, User);
  }

  deleteUser(userId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${userId}`);
  }
  getUserById(userId: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/${userId}`);
  }
}

