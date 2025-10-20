import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  submitContact(payload: ContactPayload): Observable<ContactPayload> {
    const body = { ...payload, createdAt: new Date().toISOString() };
    return this.http.post<ContactPayload>(`${this.API_URL}/contacts`, body);
  }
}