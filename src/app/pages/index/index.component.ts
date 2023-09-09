import { Component } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  rol: string;

  constructor(private tokenService: TokenService,
    ){}


  ngOnInit() {
    if (this.tokenService.getToken()) {
      
      this.rol = this.tokenService.getAuthority();
    }
  }

}
