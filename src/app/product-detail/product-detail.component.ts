import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../layouts/header/header.component';
import { FooterComponent } from '../layouts/footer/footer.component';
import { ProductsComponent } from '../components/products/products.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule, HeaderComponent, FooterComponent, ProductsComponent],
  providers: [ProductService],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  constructor(public productService: ProductService, private route: ActivatedRoute) {
   
  }

  productDetail: any;
  ngOnInit() { 
    const id = this.route.snapshot.params['id'];
    this.productService.getProductDetails(id).subscribe((detail)=> {
      this.productDetail = detail;
    });

  }

}
