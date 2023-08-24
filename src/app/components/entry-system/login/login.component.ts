import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  hide: boolean = true;
  public userData: any = {
    email: '',
    password: '',
    platform: 'web'
  };

  constructor(private router: Router, public api: ApiService) { }

  ngOnInit(): void { 
  }

  login() {
    this.loading = true; 
    /*
    this.api.login(this.userData).subscribe(async (data:any) => { 
      await this.api.setProfile(data);
      await this.api.setToken(data.token);
      this.router.navigateByUrl('/admin/dashboard');
      this.loading = false;
    }, (err:any) => {
      this.api.toastError(err.error.error);
      this.loading = false;
    });
    */
    setTimeout(() => {
    if (this.userData.email == 'carlos@exodochile.cl' && this.userData.password=='EspinaceCarlos') {
      this.api.setProfile({});
      this.api.setToken("123456789");
      setTimeout(() => {
        this.router.navigateByUrl('/admin/dashboard');
        this.loading = false;
      },500);
    } else {
      this.api.toastError('Acceso denegado');
      this.loading = false;
    }
    },1000);
  }

  enterBtn(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.login()
    }
  }
}
