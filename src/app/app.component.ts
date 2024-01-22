import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SlideComponent } from './components/slide/slide.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainLayoutComponent, SlideComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'angular-app';
}
