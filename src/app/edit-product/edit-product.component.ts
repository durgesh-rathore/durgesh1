import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
   productId:any;
   products:any;
   productName:any;
   productImageUrl:any;
   productImage:any="";
    productPrice:any;
    productQty:any;
    productDescription:string="";
    productDiscount:any="";
    categoryId:any="";
    categoryData:any[]=[];
  constructor(private _cservice:CategoryService,private router:ActivatedRoute,private productService:ProductService) {
    this.productId=this.router.snapshot.paramMap.get('pid');
    this._cservice.viewCategoryf().subscribe(result=>{
           this.categoryData=result;
         })
      
    this.productService.viewProduct().subscribe(result=>{
      if(result){
        this.products=result;
        for(let product of this.products){
          if(product._id==this.productId){
            this.productName=product.productName;
            this.productImageUrl=product.productImageUrl;
    this.productPrice=product.productPrice;
    this.productQty=product.productQty;
    this.productDescription=product.productDescription;
    this.productDiscount=product.productDiscount;
    this.categoryId=product.categoryId;
          }
        }
        
      }
      else alert("something went wrong");
    })
   }
   selectImage(event:any){
       if(event.target.files.length>0)
       this.productImage=event.target.files[0];
     }
    
editProductHtml(){

  console.log( "category ID in httml fu");
  console.log(this.categoryId);
  let formdata=new FormData();
  formdata.append("productId",this.productId);
  formdata.append("productName",this.productName);
  formdata.append("productImage",this.productImage);
  formdata.append("productPrice",this.productPrice);
  formdata.append("productQty",this.productQty);
  formdata.append("productDescription",this.productDescription);
  formdata.append("productDiscount",this.productDiscount);
  // formdata.append("categoryId",this.categoryId);
  formdata.append("productOldImageUrl",this.productImageUrl);

   this.productService.editProduct(formdata).subscribe(result=>{
      if(!result)
       alert('You product added sucseful');
       else
       alert('Failed to add product!');
   })
 }
  ngOnInit(): void {
  }

}




// productImage:any="";
// productName:string="";
// productPrice:any;
// productQty:any;
// productDescription:string="";
// productDiscount:any;
// categoryId:any;

// // fetching data from category component
//  categoryData:any[]=[];
// constructor(private _service:ProductService,private _cservice:CategoryService){ 
//   this._cservice.viewCategoryf().subscribe(result=>{
//     this.categoryData=result;
//   })
// }
// selectImage(event:any){
//   if(event.target.files.length>0)
//   this.productImage=event.target.files[0];
// }

//   var options = ["one","two","three"], selectHtml = "";

// for(var optionIndex = 0; optionIndex < options.length; optionIndex++) {

//     selectHtml += ("<option>" + options[optionIndex] + "</option>");

// }

// document.getElementById("selectBox").innerHTML = selectHtml;

// addProductHtml(){
//   console.log(this.categoryId);
// let formdata=new FormData();
//  formdata.append("productName",this.productName);
//  formdata.append("productImage",this.productImage);
//  formdata.append("productPrice",this.productPrice);
//  formdata.append("productQty",this.productQty);
//  formdata.append("productDescription",this.productDescription);
//  formdata.append("productDiscount",this.productDiscount);
//  formdata.append("categoryId",this.categoryId);

//   this._service.addProduct(formdata).subscribe(result=>{
//      if(result)
//       alert('You product added sucseful');
//       else
//       alert('Failed to add product!');
//   })
// }


//     // console.log(this.file);
//     // this.categoryName=this.file.categoryName;
//     // this.categoryImageUrl=this.file.categoryImageUrl;


//   }


//   ngOnInit(): void {
//   }

// }
