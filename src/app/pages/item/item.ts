import { Component, inject, OnInit } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { ProductsService } from '../../service/products-service';

@Component({
  selector: 'app-item',
  imports: [NavBar],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit{

  private productServise = inject(ProductsService);

  productList: any[] = [];

  ngOnInit(): void {
    this.productServise.getProduct().subscribe(
      (data : any) =>{
        console.log(data.products);
        this.productList = data.products;
      }
    );
  }
}
