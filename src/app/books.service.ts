import { Injectable } from '@angular/core';
import * as data from 'data.json';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor( private http:HttpClient) { }

  bookdetails:any=(data as any).default;

  // bcontent is an variable that stores all the data from the json in the book
  bcontent:any=this.bookdetails.books;

  // wdata is the variable thet stores all the data from the json wishlist.
  wdata:any=this.bookdetails.wishlist;

    // wdata is the variable thet stores all the data from the json completed.

    cdata:any=this.bookdetails.completed;


//adding books to wishlist.
  wishlist(wlist:any)
  {
    return this.http.post<any>("http://localhost:3000/wishlist",wlist)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  // adding books to completed list
  completed(clist:any)
  {
    return this.http.post<any>("http://localhost:3000/completed",clist)
    .pipe(map(res=>{
      return res;
    }))
  }

  //remove item from the wishlist

  deletelist(id:number): Observable<any>
  {
    return this.http.delete<any>("http://localhost:3000/wishlist/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  completedDeletelist(id:number): Observable<any>
  {
    return this.http.delete<any>("http://localhost:3000/completed/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }





}
