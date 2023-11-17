import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';

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
  loginSuccess: boolean;
  loginError: boolean;

  constructor(private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
    ){
      this.loginSuccess = false; 
      this.loginError = false;
    }


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
        this.toastr.success('Logeado correctamente')
        this.router.navigate(['/index']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error('Usuario o contraseña incorrectas')
        console.log(this.errMsj);
      }

      
    );
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Supongamos que esta condición verifica un inicio de sesión exitoso.
      this.loginSuccess = true;
      this.loginError = false;
    } else {
      this.loginSuccess = false;
      this.loginError = true;
    }
  }
}
