import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'    
})
export class ProductsComponent {
    productName = 'A book';
    products: string[] = [];
    isDisabled = false;
    constructor() {
        setTimeout(() => {
            this.isDisabled = true;
        }, 3000);
    }

    onAddProduct() {
        this.products.push(this.productName);
    }
}