import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterOutlet } from '@angular/router';
import { ProductDetailComponent } from '../../product-detail/product-detail.component';
import { ProductsComponent } from '../../components/products/products.component';
import { SlideComponent } from '../../coponents/slide/slide.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductsComponent, ProductDetailComponent, RouterOutlet, SlideComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
