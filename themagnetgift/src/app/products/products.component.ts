import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../cart.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-products',
  standalone: true,
imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 49.99 }
  ];

  constructor(private cartService: CartService, private notificationService: NotificationService) {
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    this.notificationService.sendNotification('Test', 'Hello!');

  }



}
