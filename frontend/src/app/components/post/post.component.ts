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
import { MatCard,MatCardActions,MatCardAppearance,MatCardAvatar,MatCardContent,MatCardImage,MatCardSubtitle,MatCardTitle,MatCardHeader,MatCardConfig,MatCardFooter,MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule,MatCard,MatCardActions,MatCardHeader,MatCardFooter,MatCardContent,MatButton,MatCardTitle,MatCardSubtitle,MatCardImage,MatIcon],
})
export class PostsComponent implements OnInit {
  posts: any;
  errorMessage: string = '';

  constructor(private postService: PostService,private cartService: CartService) { }

  ngOnInit(): void {
    // this.postService.getPosts().subscribe(
     
    //   data => this.posts = data,
    //   error => console.error('there is an error',error)
    // );
    this.get()
  }

  get(){
    this.postService.getPosts().subscribe((data)=>{
      console.log('data',data)

      this.posts = data ?? [];

    })
  }
  addToCart(foodId: any): void {
    this.cartService.addToCart(foodId, 1).subscribe((response) => {
      console.log('Item added to cart', response);
    }, error => {
      console.error('Error adding item to cart', error);
    });
  }
  


}

