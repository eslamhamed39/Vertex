import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface LoginResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL
  private isAuthenticated = false;

  constructor(private http: HttpClient) {
    // Check if user is already logged in from previous session
    this.isAuthenticated = !!localStorage.getItem('isLoggedIn');
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, {
      user: username,
      pass: password
    })
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}