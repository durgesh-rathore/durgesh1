import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productImage:any="";
  productName:string="";
  productPrice:any;
  productQty:any;
  productDescription:string="";
  productDiscount:any;
  categoryId:any;

  // fetching data from category component
   categoryData:any[]=[];
  constructor(private _service:ProductService,private _cservice:CategoryService){ 
    this._cservice.viewCategoryf().subscribe(result=>{
      this.categoryData=result;
    })
  }
  selectImage(event:any){
    if(event.target.files.length>0)
    this.productImage=event.target.files[0];
  }

//   var options = ["one","two","three"], selectHtml = "";

// for(var optionIndex = 0; optionIndex < options.length; optionIndex++) {

//     selectHtml += ("<option>" + options[optionIndex] + "</option>");

// }

// document.getElementById("selectBox").innerHTML = selectHtml;

  addProductHtml(){
    console.log(this.categoryId);
  let formdata=new FormData();
   formdata.append("productName",this.productName);
   formdata.append("productImage",this.productImage);
   formdata.append("productPrice",this.productPrice);
   formdata.append("productQty",this.productQty);
   formdata.append("productDescription",this.productDescription);
   formdata.append("productDiscount",this.productDiscount);
   formdata.append("categoryId",this.categoryId);

    this._service.addProduct(formdata).subscribe(result=>{
       if(result)
        alert('You product added sucseful');
        else
        alert('Failed to add product!');
    })
  }
  ngOnInit(): void {
  }

}
