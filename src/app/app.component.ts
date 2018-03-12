import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';
import {Item} from './item';

     
 
@Component({
    selector: 'purchase-app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent implements OnInit { 

    items: Item[] = [];
    constructor(private dataService: DataService){}

    addItem(text: string, price: number, quantity: number, check: boolean){

        this.dataService.addData(text, price, quantity, check)
    }

    ngOnInit(){
        this.items = this.dataService.getData()
    }

    Price : number = 0;

  //   // Добавление элементов
  //   addItem(text: string, price: number, quantity: number, check: boolean): void {
         
  //       if(text==null || text==undefined)
  //           return;
  //       if(price==null || price==undefined)
  //           return;
  //       if(quantity==null || quantity==undefined)
  //           return;
  //       this.items.push(new Item(text, price, quantity, check));
  //   }

    // Удаление элементов
    removeItem(item: any, index: any){
        this.items.splice(index, 1)
    }

    // Подсчет суммы
    countPrice(){
     this.Price = 0;
      for(let p of this.items){
        if(p.status===true){
            this.Price += p.cost*p.amount
        }
      }
  }
}