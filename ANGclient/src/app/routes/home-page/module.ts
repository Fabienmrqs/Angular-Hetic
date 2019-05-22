/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { HomePageComponent } from './home-page.component';
    import { Routing } from "./router";
    import { CustomersComponent} from "../../components/customers/customers.component";
    import {MatDividerModule} from '@angular/material/divider';



/* 
Definition 
*/
    @NgModule({
        declarations: [ HomePageComponent, CustomersComponent ],
        imports: [ 
            CommonModule,
          MatDividerModule,

            // Ajouter le router dans la tableau des imports
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//
