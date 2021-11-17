import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {
  
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    date: '',
    codigo: 0
  }
  constructor(private productService: ProductService,
     private router: Router) { }

  ngOnInit(): void {
  
  }

  creatProduct(): void{
    this.productService.create(this.product).subscribe(()=>{
      this.productService.showMenssage('Produto Criado!')
      this.router.navigate(['/products'])
    })
    
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }

}
