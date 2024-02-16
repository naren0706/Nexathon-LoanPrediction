import { HttpHeaders } from '@angular/common/http';
import { HttpServiceService } from './../httpServices/http-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PredictionServiceService {
  constructor(private httpService: HttpServiceService) {}
  getPredictedValue(reqBody: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-token',
      }),
    };
    return this.httpService.postService(
      reqBody,
      false,
      httpAuthOptions
    );
  }
}
