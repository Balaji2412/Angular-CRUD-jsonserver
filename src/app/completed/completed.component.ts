import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {

  public completedList:any="";

  constructor(private cd:BooksService)
  {
    this.completedList=cd.cdata;

  }
  RemoveFromCompletedList(del:any)
  {
    console.log(del.id);
    this.cd.completedDeletelist(del.id)
    //console.log(del.id);
    .subscribe(res=>{
      alert('Book Removed From completed');
      console.log(res);
    })

  }



}
