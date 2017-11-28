import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServiceService {

  url = "http://jworks.lt/ngapp/ngapp.php";
  result;

  constructor(private httpClient: HttpClient) { }

  success(smth: string) {
    return this.httpClient.post(this.url, smth);
  }


}
