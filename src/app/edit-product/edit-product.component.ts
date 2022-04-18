import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  constructor(private router:ActivatedRoute,private productService:ProductService) {
    this.productId=this.router.snapshot.paramMap.get('pid');
    this.productService.viewProduct().subscribe(result=>{
      if(result){
        this.products=result;
        for(let product of this.products){
          if(product._id==this.productId){
            this.productName=product.productName;
            this.productImageUrl=product.productImageUrl;
          }
        }
        
      }
      else alert("something went wrong");
    })
   }

  ngOnInit(): void {
  }

}




// export class EditCategoryComponent implements OnInit {
//   categoryId: any = ""
//   categories: any = "";
//   categoryName: any;
//   categoryImageUrl: any;
//   constructor(private router: ActivatedRoute, private categoryService: CategoryService) {
//     this.categoryId = this.router.snapshot.paramMap.get('cid');
//     this.categoryService.viewCategoryf().subscribe(result => {
//       console.log("result" + result);
//       if (result) {
//         this.categories = result;
//         for (let category of this.categories) {
//           if (category._id == this.categoryId) {
//             this.categoryName = category.categoryName;
//             this.categoryImageUrl = category.categoryImageUrl;
//           }
//         }
//       }
//       else
//         alert("!Something went wrong")
//     })



//     // console.log(this.file);
//     // this.categoryName=this.file.categoryName;
//     // this.categoryImageUrl=this.file.categoryImageUrl;


//   }


//   ngOnInit(): void {
//   }

// }
