import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { NavBar } from "../../components/nav-bar/nav-bar";
import { ProductsService } from '../../service/products-service';


@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit{

  private productServise = inject(ProductsService);
  private cdr = inject(ChangeDetectorRef);

  productList: any[] = [];

  ngOnInit(): void {
    this.productServise.getProduct().subscribe(
      (data : any) =>{
        console.log(data.products);
        this.productList = data.products;

        this.cdr.detectChanges();
      },
      (error) => {
        console.error("not come data", error);
      }
    );
  }
}
