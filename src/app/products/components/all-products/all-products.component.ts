import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../Models/product";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  products:Product[]=[];
  categories:string[]=[]

  cartProducts:any[]=[]

  loading:boolean = false

  ngOnInit(): void {
    this.getProducts()
    this.getCategories()

  }

  constructor(private service:ProductsService) {
  }

  getProducts(){
    this.loading = true
    this.service.getAllProducts().subscribe((res:any) =>{
      this.products=res
      this.loading = false
    },error => {
      alert(error)
      }
    )
  }

  getCategories(){
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories=res
      this.loading = false
    }, error =>{
      alert(error)
      }
    )
  }

  filterCategory(event:any){
    let value = event.target.value;// on a le mot de categorie
    if(value =="all"){
      this.getProducts()
    }
    else{
      this.getProductsCategory(value) // on envoie le mot à la fonction qui va filtrer
    }

  }
  getProductsCategory(keyword:string){
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.products = res
      this.loading = false
    })
  }

  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist){
        alert("Product kayn déja")
      }else{
        this.cartProducts.push(event)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }

    }else {
      this.cartProducts.push(event)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

  }

}
