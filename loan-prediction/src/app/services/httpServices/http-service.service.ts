import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) {}

  postService(reqBody: any, token: boolean, httpAuthOptions: any) {
    return this.httpClient.post(
      "http://127.0.0.1:5000/api/predict",
      reqBody,
      token && httpAuthOptions
    );
  }
}
