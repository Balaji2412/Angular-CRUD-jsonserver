import { Component } from '@angular/core';
import { BooksService } from '../books.service';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';



@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  public wishlistdata:any="";

  public delobj:any="";

  constructor(private wd:BooksService,private http:HttpClient)
  {
    this.wishlistdata=wd.wdata;
    this.delobj=wd;
  }


  RemoveFromWishList(del:any)
  {
    console.log(del.id);
    this.wd.deletelist(del.id)
    //console.log(del.id);
    .subscribe(res=>{
      alert('Book Removed From wishlist');
      console.log(res);
    })
  }




}
