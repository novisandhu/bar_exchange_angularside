import {Component, OnInit} from '@angular/core';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private adminservice: AdminService) {
  }

  ngOnInit(): void {
  }

  loginAction(details: any) {
    console.log(details);

    this.adminservice.login(details).subscribe((res: any) => {
      console.log(res);
    });
  }

}
