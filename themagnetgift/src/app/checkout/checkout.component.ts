import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

   total = 0;
  constructor(private cartService: CartService) {
    this.total = this.cartService.getCart().reduce((sum, item) => sum + item.price, 0);
  }

  completeCheckout() {
    // Add payment logic
  }


  
}
