import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vendor {
  id: number;
  name: string;
  category: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private readonly apiUrl = 'http://localhost:3000/api/vendors';

  constructor(private readonly http: HttpClient) {}

  getVendors(): Observable<Vendor[]> {
    return this.http.get<Vendor[]>(this.apiUrl);
  }
}
