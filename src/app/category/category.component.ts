import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryName="";
  categoryImage="";

  constructor(private _cateServ:CategoryService,private _router:Router) {}

  ngOnInit(): void {
  }
  selectImage(event:any){
    if(event.target.files.length>0)
    this.categoryImage=event.target.files[0];
  }
  addCategoryHtml(){
    const formdata=new FormData();
    formdata.append("categoryName",this.categoryName);
    formdata.append("categoryImage",this.categoryImage);
    this._cateServ.addCategory(formdata).subscribe(result=>{
      if(result){
     alert("category add successful");
        this._router.navigate(['addProduct'])
      }
     else
     alert("Failed to add category");
    });
    
 }

}
