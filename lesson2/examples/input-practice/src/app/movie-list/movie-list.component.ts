import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit 
{
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie( newTitle: string )
   {
     let msg: string = "";
     if ( newTitle.trim().length === 0 )
     {
       msg = "Invalid value.";
     }
     else if ( this.movies.includes(newTitle) )
     {
       msg = "We love that movie too, but no repeats!";
     }

     if ( msg.trim().length === 0 )
     {
       this.movies.push( newTitle );
     }
     return msg;
   }
}
