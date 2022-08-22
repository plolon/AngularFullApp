import { Component } from "@angular/core";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html'    
})
export class ProductsComponent {
    productName = 'A book';
    products: string[] = [];
    isDisabled = true;
    constructor() {
        setTimeout(() => {
            this.isDisabled = false;
        }, 1000);
    }

    onAddProduct(form : any) {
            if(form.status === "VALID"){
                this.products.push(form.value.productName);
            }
    }

    onRemoveProduct(product: string){
        this.products = this.products.filter(x => x !== product);
    }
}