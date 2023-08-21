import { Component ,OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import {FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public bdata:any="";




  constructor(private bd:BooksService)
  {
    //this.bdata=bd.details();
    this.bdata=bd.bcontent;
  }



  //method to call the post method in service and post the data in the server(for wishlist)

  AddTOwishlist(getdata:any)
  {

    this.bd.wishlist(getdata)
    .subscribe(res=>{
      console.log(res);
      alert('data added to wishlist');
    },
    err=>{alert("something is wrong");
  })


  }

   //method to call the post method in service and post the data in the server(for completed list)

  AddTOCompleted(completed:any)
  {
    this.bd.completed(completed)
    .subscribe(res=>{
      console.log(res);
      alert('Book Added to Completed List');
    },
    err=>{alert('something went wrong')
  })

  }




}
