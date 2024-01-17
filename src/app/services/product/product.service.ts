import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
// crud 
export class ProductService {
  constructor(private http:HttpClient) {

  }

  getProductList(): Observable<any>{
    return this.http.get<any>(environment.product);
  }

  getProductDetails(id: string|number): Observable<any> {
    return this.http.get<any>(environment.product + '/' + id);
  }

  deleteProduct(id: string|number): Observable<any> {
    return this.http.delete<any>(environment.product + '/' + id);
  }


}
