import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Blogs } from '../Intrface/blogs';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = 'http://localhost:3000'; // Update with your server URL

  constructor(private http: HttpClient) {}

  // Get all Blogss (sorted newest to oldest)
  getBlogs(): Observable<Blogs[]> {
    return this.http.get<{ success: boolean; data: Blogs[] }>(`${this.apiUrl}/blogs`).pipe(
      map(response => {
        if (!response.success) {
          throw new Error('Failed to fetch Blogss');
        }
        console.log('Blogs:', response.data);
        return response.data;
      }),
      catchError(this.handleError)
    );
  }

  // Add a new Blogs post
  addBlogs(Blogs: Partial<Blogs>): Observable<{ success: boolean; message: string; postId: number }> {
    return this.http.post<{ success: boolean; message: string; postId: number }>(
      `${this.apiUrl}/add/Blogs`,
      Blogs
    ).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unexpected error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error: ${error.status} - ${error.error.error || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
