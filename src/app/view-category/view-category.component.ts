import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
 fileList:any[]=[];
 
  constructor(private _service:CategoryService,private router:Router) { 
    console.log(this.fileList);  
  this._service.viewCategoryf().subscribe(result=>{
    console.log("result"+result);
    if(result)
    this.fileList=result;
     else
     alert("!Something went wrong")
   })
  }
  
  deleteCategory(ID:any,SNo:number){
    this._service.deleteCategory(ID).subscribe(result=>{
if(result){
      console.log("This serial number"+SNo);
      this.fileList.splice(SNo,1);
      alert('Delete item sucessfully');
}
      else
      alert('failed to Delete item');
    })
  }
  
  EditCategory(cid:any){
     console.log(cid);
    this.router.navigate(['edit-category',cid])
  }
  ngOnInit(): void {
  }

}
