import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
  productName = 'A book';
  isDisabled = true;
  products: string[] = [];
  private productSubscription: Subscription;

  constructor(private productsService: ProductsService) {
    setTimeout(() => {
      this.isDisabled = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
    this.productSubscription = this.productsService.productsUpdated.subscribe(
      () => {
        this.products = this.productsService.getProducts();
      }
    );
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

  onAddProduct(form: any) {
    if (form.status === 'VALID') {
      this.productsService.addProduct(form.value.productName);
    }
  }

  onRemoveProduct(product: string) {
    this.products = this.products.filter((x) => x !== product);
  }
}
