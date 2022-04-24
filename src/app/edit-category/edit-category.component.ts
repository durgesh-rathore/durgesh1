import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  categoryId: any = ""
  categories: any = "";
  categoryName: any="";
  categoryImage: any="";
    newCategory:string=""; 
  constructor(private router: ActivatedRoute, private cateServ: CategoryService) {
    this.categoryId = this.router.snapshot.paramMap.get('cid');
    this.cateServ.viewCategoryf().subscribe(result => {
      console.log("result" + result);
      if (result) {
        this.categories = result;
        for (let category of this.categories) {
          if (category._id == this.categoryId) {
            this.categoryName = category.categoryName;
            this.categoryImage = category.categoryImageUrl;
          }
        }
      }
      else
        alert("!Something went wrong")
    })



    // console.log(this.file);
    // this.categoryName=this.file.categoryName;
    // this.categoryImageUrl=this.file.categoryImageUrl;


  }
  selectImage(event:any){
    if(event.target.files.length>0)
    this.newCategory=event.target.files[0];
  }
  EditCategoryHtml(){
    const formdata=new FormData();
    formdata.append("newCategory",this.newCategory);
    formdata.append("oldImage",this.categoryImage);
    formdata.append("categoryName",this.categoryName);
    formdata.append("categoryId",this.categoryId);
    this.cateServ.editCategory(formdata).subscribe(result=>{
      console.log("in alter")
      // console.log(result.modifiedCount);
      if(!result){
        
        alert("category update successful");
        // this._router.navigate(['addProduct'])
      }
     else
     alert("Failed to failed category");
    });
    
 }


  ngOnInit(): void {
  }

}
