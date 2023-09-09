import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario: Login;
  username: string;
  password: string;
  rol: string;
  errMsj: string;

  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private router: Router){}


  ngOnInit() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.rol = this.tokenService.getAuthority();
    }
  }

  onLogin(): void {
    this.loginUsuario = new Login(this.username, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.username);
        this.tokenService.setAuthorities(data.rol);
        this.rol = data.rol;
        this.router.navigate(['/index']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
 
        console.log(this.errMsj);
      }
    );
  }
}
