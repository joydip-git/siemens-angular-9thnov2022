import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { ApiResponse } from "src/app/models/api-response.model";
import { Product } from "../../../models/product.model";
//import { Observable } from "rxjs";

@Injectable()
export class ProductService {
    url = 'http://127.0.0.1:3003/products'
    constructor(private _http: HttpClient) {
    }
    getProducts(): Observable<ApiResponse<Product[]>> {
        const resp: Observable<ApiResponse<Product[]>> = this._http.get<ApiResponse<Product[]>>(this.url)
        return resp;

    }
    getProductById(id: number): Observable<ApiResponse<Product>> {
        const resp: Observable<ApiResponse<Product>> = this._http.get<ApiResponse<Product>>(`${this.url}/${id}`)
        return resp;
    }
}