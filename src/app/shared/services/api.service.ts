import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService<Type> {
  protected endpoint: string;
  protected http: HttpClient;
  constructor(
    endpoint: string,
    http: HttpClient
  ) {
    this.endpoint = endpoint;
    this.http = http;
  }
  query(
    order: string = 'id',
    offset: number = 0,
    limit: number = 10,
    filter: string = '',
    include_count: boolean = true
  ): Observable<ApiResponse<Type>> {
    return this.http.get<ApiResponse<Type>>(
      `${environment.API_URL}/pietra/_table/${this.endpoint}`,
      {
        params: {
          order,
          offset: `${offset}`,
          limit: `${limit}`,
          filter,
          include_count: `${include_count}`
        }
      }
    )
  }
  search(field: string, term: string): Observable<ApiResponse<Type>> {
    console.log(field, term);
    return this.http.get<ApiResponse<Type>>(
      `${environment.API_URL}/pietra/_table/${this.endpoint}`,
      {
        params: {
          filter: `${field} like '%${term}'`
        }
      }
    ).pipe(
      map((res: any) => res.resource)
    )
  }
}
