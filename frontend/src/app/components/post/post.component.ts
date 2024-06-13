// // posts.component.ts

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { CommonModule } from '@angular/common';
// import { PostService } from '../../services/post.service';

// @Component({
//   selector: 'app-posts',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.scss'],
//   standalone: true,
//   imports: [CommonModule],
// })
// export class PostsComponent implements OnInit {
//   posts: any[] = [];

//   constructor(private postService: PostService) { }

//   ngOnInit(): void {
//     this.getPosts();
//   }

//   getPosts(): void {
//     this.postService.getPosts()
//       .subscribe(posts => {
//         this.posts = posts;
//         console.log("posts",posts)
//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(
        posts => {
          this.posts = posts;
        },
        error => {
          this.errorMessage = error;
        }
      );
  }
}

