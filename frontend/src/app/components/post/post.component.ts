import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './post.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  posts: any[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
