import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product';
import { ShopParams } from 'src/app/shared/models/shopParams';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

}
