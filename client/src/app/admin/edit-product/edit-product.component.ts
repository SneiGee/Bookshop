import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IBrand } from 'src/app/shared/models/brand';
import { IProduct, ProductFormValues } from 'src/app/shared/models/product';
import { IType } from 'src/app/shared/models/productType';
import { ShopService } from 'src/app/shop/shop.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: IProduct;
  productFormValues: ProductFormValues;
  brands: IBrand[];
  types: IType[];

  constructor(private adminService: AdminService,
              private shopService: ShopService,
              private route: ActivatedRoute,
              private router: Router) {
    this.productFormValues = new ProductFormValues();
  }

  ngOnInit(): void {
    const brands = this.getBrands();
    const types = this.getTypes();

    forkJoin([types, brands]).subscribe(results => {
      this.types = results[0];
      this.brands = results[1];
    }, error => {
      console.log(error);
    }, () => {
      if (this.route.snapshot.url[0].path === 'edit') {
        this.loadProduct();
      }
    });
  }


  loadProduct() {
    this.shopService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe((response: any) => {
      const productBrandId = this.brands && this.brands.find(x => x.name === response.productBrand).id;
      const productTypeId = this.types && this.types.find(x => x.name === response.productType).id;
      this.product = response;
      this.productFormValues = {...response, productBrandId, productTypeId};
    });
  }

  getBrands() {
    return this.shopService.getBrands();
  }

  getTypes() {
    return this.shopService.getTypes();
  }

}
