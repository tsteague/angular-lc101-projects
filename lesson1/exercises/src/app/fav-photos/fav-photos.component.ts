import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://image.shutterstock.com/image-illustration/side-view-studio-shot-white-260nw-191099207.jpg';
  image3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF_cuaEcdeg4lR0GRZ1CvvxA06A_J8LEwUog&usqp=CAU';

  constructor() { }

  ngOnInit() {
  }

}
