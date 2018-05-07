import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from "rxjs";

@Injectable()
export class PatientsService {

  constructor(private apiService: ApiService) { }

  GetPatients(k_yechida: number): Observable<any> {
    const url = "Get_meushpazim?k_yechida=" + k_yechida + "&sugOved=" + 1;
    return this.apiService.GetApiData(url);
  }

}
