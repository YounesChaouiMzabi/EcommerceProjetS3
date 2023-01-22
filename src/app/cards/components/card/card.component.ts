import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
   cardProducts: any[] = [];
   total:any

  constructor() {
  }
  ngOnInit(): void {
    this.getCardProducts()
  }

  getCardProducts(){
    if("cart" in localStorage){
      this.cardProducts = JSON.parse(localStorage.getItem("cart")!)
    }
    this.getTotalPrice()
   // console.log(this.cardProducts)
  }

  getTotalPrice(){
    this.total = 0
    for(let x in this.cardProducts){
      this.total += this.cardProducts[x].item.price *this.cardProducts[x].quantity;
    }
  }


  addAmount(index: number) {
     this.cardProducts[index].quantity++
      this.getTotalPrice()
      localStorage.setItem("cart",JSON.stringify(this.cardProducts))
  }

  minsAmount(index: number) {
    this.cardProducts[index].quantity--
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cardProducts))
  }

  detectChanges() {
     this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cardProducts))
  }

  deleteProduct(index: number) {
    this.cardProducts.splice(index,1)
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cardProducts))

  }

  clearCard() {
    this.cardProducts.splice(0,this.cardProducts.length)
    this.getTotalPrice()
    localStorage.setItem("cart",JSON.stringify(this.cardProducts))
  }
}
