import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'    
})
export class ProductsComponent {
    productName = 'A book';

    constructor() {
        setTimeout(() => {
            this.productName = 'A tree';
        }, 3000);
    }

    ChangeName() {
        this.productName = 'A Boat';
    }
}