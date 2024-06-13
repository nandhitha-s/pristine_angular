import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:3000/api/cart';
  constructor(private http: HttpClient) { }
  addToCart(foodId: number, quantity: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, { food_id: foodId, quantity });
  }
}
