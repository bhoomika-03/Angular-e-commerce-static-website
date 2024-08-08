import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private apiUrl = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
  private httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': '75be52af73msh5a95fd63d99db0cp12ea7djsn269932469ca4',
      'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions);
  }

}
