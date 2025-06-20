import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BlogPost } from '../../Intrface/blogs'; // Path to src/app/Intrface/blogs
import { BlogsService } from '../../Services/blogs.service'; // Path to src/app/Services/blogs.service

@Component({
  selector: 'app-blogs-view',
  templateUrl: './blogs-view.component.html',
  styleUrls: ['./blogs-view.component.css']
})
export class BlogsViewComponent implements OnInit {
  posts: BlogPost[] = [];
  singlePost: BlogPost | undefined;
  isLoading = false;
  error: string | null = null;

  constructor(private blogsService: BlogsService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.isLoading = true;
    this.error = null;
    this.blogsService.getPublishedBlogPosts().subscribe({
      next: (data: BlogPost[]) => {
        this.posts = data;
        this.isLoading = false;
      },
      error: (err: Error) => {
        console.error('Error loading posts:', err);
        this.error = 'Failed to load posts. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  // loadSinglePost(id: string): void {
  //   this.isLoading = true;
  //   this.error = null;
  //   this.blogsService.getBlogPostById(id).subscribe({
  //     next: (data: BlogPost) => {
  //       this.singlePost = data;
  //       this.isLoading = false;
  //       if (!data) {
  //         this.error = 'Post not found.';
  //       }
  //     },
  //     error: (err: Error) => {
  //       console.error('Error loading post:', err);
  //       this.error = 'Failed to load post. Please try again later.';
  //       this.isLoading = false;
  //     }
  //   });
  // }

  // Safely render HTML
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}