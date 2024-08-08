import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  providers:[HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: any;

  constructor(private amazonService: CommonServiceService) { }

  ngOnInit(): void {
    this.amazonService.getProducts().subscribe(
      (data: any) => {
        console.log(data)
        this.products = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
// async bhavin () {
// const url = 'https://real-time-amazon-data.p.rapidapi.com/products-by-category?category_id=2478868012&page=1&country=US&sort_by=RELEVANCE&product_condition=ALL';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '75be52af73msh5a95fd63d99db0cp12ea7djsn269932469ca4',
// 		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
}
