import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
})
export class PostComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
      this.posts.forEach(post => {
        const blob = new Blob([post.image], { type: 'image/jpeg' });
        post.imageUrl = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      });
    });
  }
}
