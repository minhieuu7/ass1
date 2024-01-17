import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: any;
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
      this.productService.getProductList().subscribe((data)=> {
      this.productList = data;
    })
  }

  onDelete(id: string | number): void {
    this.productService.deleteProduct(id).subscribe((data)=> {
        console.log('ok');
    })
  }
  
}
