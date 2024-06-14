// import { Component } from '@angular/core';
// import { CartService } from '../../services/cart.service';
// import { CommonModule } from '@angular/common';
// @Component({
//   selector: 'app-cart',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './cart.component.html',
//   styleUrl: './cart.component.scss'
// })
// export class CartComponent {
//   cartItems: any[] = [];

//   constructor(private cartService: CartService) { }
//   ngOnInit(): void {
//     this.cartService.getCartItems().subscribe(data => {
//       this.cartItems = data.map(item => {
//         const blob = new Blob([item.image], { type: 'image/jpeg' });
//         item.imageUrl = URL.createObjectURL(blob);
//         return item;
//       });
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
    });
  }

  getImageUrl(id: number): string {
    switch (id) {
      case 1:
        return 'https://www.twosisterscrafting.com/wp-content/uploads/2016/07/caramel-corn-1200-featured-720x720.jpg';
      case 2:
        return 'https://www.snixykitchen.com/wp-content/uploads/2017/03/Black-Sesame-Britte-4-840x1260.jpg';
        
      case 3:
        return 'https://strengthandsunshine.com/wp-content/uploads/2017/12/Sesame-Candy-7.jpg';
      default:
        return 'default-image-url'; // Provide a default image URL in case the ID doesn't match
    }
  }
}

