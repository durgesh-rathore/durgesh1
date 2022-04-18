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
  categoryName: any;
  categoryImageUrl: any;
  constructor(private router: ActivatedRoute, private categoryService: CategoryService) {
    this.categoryId = this.router.snapshot.paramMap.get('cid');
    this.categoryService.viewCategoryf().subscribe(result => {
      console.log("result" + result);
      if (result) {
        this.categories = result;
        for (let category of this.categories) {
          if (category._id == this.categoryId) {
            this.categoryName = category.categoryName;
            this.categoryImageUrl = category.categoryImageUrl;
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


  ngOnInit(): void {
  }

}
