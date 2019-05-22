import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../../services/customers/customers.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: []
})
export class HomePageComponent implements OnInit {

  public customersCollection: Array<any>
  public customersCollectionRaw: Array<any>
  public categoriesCollectionSlug: Array<string>
  public categoriesCollection: Array<any>
  public activeCategory : string

  constructor(private _customers: CustomersService) {
    this.categoriesCollectionSlug = [];
    this.categoriesCollection = [];
    this.activeCategory = 'all';
  }


  private getCustomersList = () => {
    this._customers.readAllCustomers()
      .then(apiResponse => {
        this.getCustomersCategories(apiResponse.data)
        this.customersCollection = apiResponse.data;
        this.customersCollectionRaw = apiResponse.data;
      })
      .catch(apiResponse => console.log(apiResponse))
  }

  private getCustomersCategories = (data : any) => {
    data.map((item: any) => {
      item.isActive = false;
      if (this.categoriesCollectionSlug.indexOf(item.category.slug) === -1) {
        this.categoriesCollectionSlug.push(item.category.slug)
        this.categoriesCollection.push(item.category)
      }
    })
    console.log(data)
  }

  public sortCustomers = (cat : any) => {

    this.activeCategory = cat.slug;
    cat.isActive = true

    let tempArray = [];

    this.customersCollectionRaw.map( item => {
      if (item.category.slug === cat.slug){
        tempArray.push(item)
      }
      this.customersCollection = tempArray;
    })
    ;
  }

  ngOnInit() {
    this.getCustomersList();
  }

}
