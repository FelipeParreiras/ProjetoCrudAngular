import { Observable } from 'rxjs';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    date: '',
    codigo: 0
  }

  constructor(
    private productService: ProductService,
    private router: Router, 
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe(product=>{
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() =>{
      this.productService.showMenssage('Produto atualizado com sucesso!')
      this.router.navigate(["/products"]);
    })
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }
}
