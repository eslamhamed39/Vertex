import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BlogPost } from '../Intrface/blogs'; // Use BlogPost instead of Blogs
import { tap } from 'rxjs/operators'; // تأكد من استيراده

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private apiUrl = 'https://geomakani.com'; // Replace with your actual server URL
  constructor(private http: HttpClient) {}
  // Get all published blog posts (sorted newest to oldest)
  getPublishedBlogPosts(): Observable<BlogPost[]> {
    // Use the correct endpoint (ensure it returns an array)
    return this.http.get<BlogPost[] | BlogPost>(`${this.apiUrl}/CMS/api/content/items/Blogs`).pipe(
      map(response => {
        // Normalize the response to always be an array
        const postsArray = Array.isArray(response) ? response : [response];
        console.log('Raw API Response (normalized):', postsArray);
        // Log the _state values for debugging
        console.log('State values:', postsArray.map(post => post._state));
        // Filter published posts (_state: 1) and sort by _created (newest first)
        const publishedPosts = postsArray
          .filter(post => post._state === 1)
          .sort((a, b) => b._created - a._created);
        console.log('Published Blog Posts:', publishedPosts);
        return publishedPosts;
      }),
      catchError(this.handleError)
    );
  }
  // Error handling
  private handleError(error: any): Observable<never> {
    let errorMessage = 'Something went wrong; please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server error: ${error.status} - ${error.message}`;
      if (error.error) {
        errorMessage += ` | Details: ${JSON.stringify(error.error)}`;
      }
    }
    console.error('An error occurred:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  // Get a single blog post by ID (for future use if loadSinglePost is uncommented)
  getBlogPostById(id: string): Observable<BlogPost> {
    return this.http.get<BlogPost[] | BlogPost>(`${this.apiUrl}/CMS/api/content/item/Blogs/${id}`).pipe(
      map(response => {
        // Normalize the response to always be an array
        const postsArray = Array.isArray(response) ? response : [response];
        // console.log('Raw API Response for ID:', postsArray);
        // Find the post with the matching _id and _state === 1
        const post = postsArray.find(post => post._id === id && post._state === 1);
        if (!post) {
          throw new Error('Blog post not found');
        }
        // console.log('Single Blog Post:', post);
        return post;
      }),
      catchError(this.handleError)
    );
  }

  getCommentsByBlogId(blogId: string): Observable<any[]> {
    const url = `${this.apiUrl}/CMS/api/content/items/Comment?filter[blogPost._id]=${blogId}&filter[_state]=1`;
    return this.http.get<any>(url).pipe(
      tap(response => console.log('🟡 tap response from service:', response)), // للتأكد قبل التعديل
      map(response => {
        console.log('✅ inside map: raw response =', response);
        return Array.isArray(response) ? response : [];
      }),
      catchError(this.handleError)
    );
  }

addComment(data: any): Observable<any> {
  const url = `${this.apiUrl}/CMS/api/content/item/Comment`;

  // const headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   // إذا كنت تحتاج توكن:
  //   'Authorization': `Bearer API-d3dbc06e132a4cc02829cfc94b824da6881771ce`
  // });

  return this.http.post<any>(url, { data }).pipe(
    tap(response => console.log('✅ Comment added successfully:', response)),
    catchError(this.handleError)
  );
}




  // Error handling
  // private handleError(error: HttpErrorResponse): Observable<never> {
  //   let errorMessage = 'An unexpected error occurred';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side error
  //     errorMessage = `Client error: ${error.error.message}`;
  //   } else {
  //     // Server-side error
  //     const serverError = error.error?.error || error.message;
  //     errorMessage = `Server error: ${error.status} - ${serverError}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(() => new Error(errorMessage));
  // }
}