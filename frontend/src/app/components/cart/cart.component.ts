import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data.map(item => {
        const blob = new Blob([item.image], { type: 'image/jpeg' });
        item.imageUrl = URL.createObjectURL(blob);
        return item;
      });
    });
  }
}
