import { Component } from '@angular/core';
import { Blogs } from 'src/app/Intrface/blogs';
import { BlogsService } from 'src/app/Services/blogs.service';

@Component({
  selector: 'app-blogs-view',
  templateUrl: './blogs-view.component.html',
  styleUrls: ['./blogs-view.component.css']
})
export class BlogsViewComponent {
  blogs: Blogs[] = [];
  loading = false;
  errorMessage: string | null = null;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.loading = true;
    this.blogsService.getBlogs().subscribe({
      next: (blogs) => {
        this.blogs = blogs;
        this.loading = false;
        this.errorMessage = null;
        console.log('Blogs:', blogs);
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.blogs = [];
        this.loading = false;
      }
    });
  }
}
