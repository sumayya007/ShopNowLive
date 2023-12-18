import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from 'src/app/services/admin-service.service';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css']
})
export class AdminCreateProductComponent {
  product={
    name:'',
    price:0,
    tags:'',
    favorite:'false',
    stars:0,
    imageUrl:'',
    category:''
  }
  postFile={
    "fieldname":"",
    "originalname":"",
    "encoding":"",
    "mimetype":"",
    "destination":"",
    "filename":"",
    "path":"",
    "size":""
  }
  categories: any;
  products: any;

  constructor(private adminService:AdminServiceService,private router:Router,private http:HttpClient,private _elementRef : ElementRef){}
  ngOnInit(): void {
    
    this.adminService.getProductsList().subscribe((data: any)=>{
      this.products=JSON.parse(JSON.stringify(data));
    });
    this.adminService. getCategoryList().subscribe((data: any)=>{
      this.categories=JSON.parse(JSON.stringify(data));
      console.log(this.categories);
    });
    
  }
  adminProduct(value:any){
    
  }
}
