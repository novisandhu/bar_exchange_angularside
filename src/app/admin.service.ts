import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL: any = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) {
  }

  login(data: any) {
    return this.http.post(this.URL + '/adminlogin', data);
  }


}
