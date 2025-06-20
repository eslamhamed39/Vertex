import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/Intrface/blogs';
import { BlogsService } from 'src/app/Services/blogs.service';
import { Comment } from 'src/app/Intrface/blogs';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  singlePost: BlogPost | undefined;
  isLoading = false;
  error: string | null = null;

  commentForm!: FormGroup;
  comments: Comment[] = [];

  showPopup = false;


  constructor(
    private blogsService: BlogsService,
    private sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loadSinglePost(postId);
      this.loadComments(postId);
    } else {
      this.error = 'No blog post ID provided.';
    }

    this.commentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });


  }

setMetaTags(): void {
  if (!this.singlePost) return; // ✅ حماية من undefined

  const imageUrl = this.singlePost?.header_image?.path
    ? `https://geomakani.com/CMS/storage/uploads/${this.singlePost.header_image.path}`
    : 'https://geomakani.com/assets/default-image.png';

  this.title.setTitle(this.singlePost.title);

  this.meta.updateTag({ name: 'description', content: this.singlePost.Description?.slice(0, 150) || '' });

  this.meta.updateTag({ property: 'og:title', content: this.singlePost.title });
  this.meta.updateTag({ property: 'og:description', content: this.singlePost.Description?.slice(0, 150) || '' });
  this.meta.updateTag({ property: 'og:image', content: imageUrl });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({ name: 'twitter:title', content: this.singlePost.title });
  this.meta.updateTag({ name: 'twitter:description', content: this.singlePost.Description?.slice(0, 150) || '' });
  this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
}



  openPopup(): void {
    const commentValue = this.commentForm.get('comment')?.value;
    console.log('Comment Value:', commentValue);
  
    if (!commentValue || commentValue.trim() === '') {
      alert('Please enter a comment before submitting.');
      return;
    }
    this.showPopup = true;
  }



  closePopup(): void {
    this.showPopup = false;
  }

  submitComment(): void {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const blogId = this.route.snapshot.paramMap.get('id');
    if (!blogId) {
      console.error('❌ Blog ID not found!');
      return;
    }

    const commentPayload = {
      name: this.commentForm.value.name,
      email: this.commentForm.value.email,
      comment: this.commentForm.value.comment,
      blogPost: {
        _id: blogId
      }
    };

    this.blogsService.addComment(commentPayload).subscribe({
      next: res => {
        console.log('🎉 Comment saved:', res);
        this.loadComments(blogId); // إعادة تحميل التعليقات بعد الإضافة
        this.closePopup();         // إغلاق النافذة المنبثقة
        this.commentForm.reset();  // تصفير النموذج
      },
      error: err => {
        console.error('❌ Failed to save comment:', err);
      }
    });
  }



  loadComments(blogId: string): void {
    console.log('Loading comments for blog ID:', blogId);
    this.blogsService.getCommentsByBlogId(blogId).subscribe({
      next: (data) => {
        this.comments = data;
        // console.log('Comments loaded:', this.comments);
        this.setMetaTags();
      },
      error: (err) => {
        console.error('Error loading comments:', err);
      }
    });
  }

  loadSinglePost(id: string): void {
    this.isLoading = true;
    this.error = null;
    this.blogsService.getBlogPostById(id).subscribe({
      next: (data: BlogPost) => {
        this.singlePost = data;
        this.isLoading = false;
        // console.log('html:', this.sanitizeHtml(this.singlePost.Description));
      },
      error: (err: Error) => {
        console.error('Error loading post:', err);
        this.error = 'Failed to load the blog post. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // New method to determine gallery item classes based on image count
  getGalleryItemClass(imageCount: number): string {
    if (imageCount === 1) {
      return 'col-12'; // Full width for 1 image
    } else if (imageCount === 2) {
      return 'col-lg-6 col-md-6 col-sm-12'; // Two columns for 2 images
    } else {
      return 'col-lg-4 col-md-6 col-sm-12'; // Three columns for 3+ images
    }
  }

    shareOnFacebook(): void {
    // نتأكد من وجود المقال لتجنب الأخطاء
    if (!this.singlePost) {
      console.error('No post data available to share.');
      return;
    }

    // 1. نقوم ببناء رابط المشاركة
    const metaFileUrl = `https://www.geomakani.com/meta/${this.singlePost._id}.html`;
    
    // 2. نقوم بتشفير الرابط (ممارسة جيدة)
    const encodedUrl = encodeURIComponent(metaFileUrl);
    
    // 3. نقوم ببناء الرابط النهائي لفيسبوك
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    
    // 4. نفتح الرابط في نافذة جديدة
    window.open(facebookShareUrl, '_blank', 'noopener,noreferrer');
  }
  
  // يمكنك عمل نفس الشيء لتويتر ولينكدإن
  shareOnTwitter(): void {
    if (!this.singlePost) return;
    const metaFileUrl = `https://www.geomakani.com/meta/${this.singlePost._id}.html`;
    const text = encodeURIComponent(this.singlePost.title);
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(metaFileUrl)}&text=${text}`;
    window.open(twitterShareUrl, '_blank', 'noopener,noreferrer');
  }

  shareOnLinkedIn(): void {
    if (!this.singlePost) return;
    const metaFileUrl = `https://www.geomakani.com/meta/${this.singlePost._id}.html`;
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(metaFileUrl)}`;
    window.open(linkedInShareUrl, '_blank', 'noopener,noreferrer');
  }


}