import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  hideReceipt:boolean = false;
  public validateAndCompletePay() {
    let form = document.getElementById('paymentForm');
    if (form instanceof HTMLFormElement && form.checkValidity()) {
        this.CompletePay();
    } else {
        alert('Please fill out all required fields correctly.');
    }
}
public CompletePay(){
  this.hideReceipt = true;
}
}
