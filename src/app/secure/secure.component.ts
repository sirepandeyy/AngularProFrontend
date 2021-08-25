import { Auth } from './../classes/auth';
import { User } from './../interfaces/user';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {


  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.authService.user().subscribe(
      user=>Auth.userEmitter.emit(user),
     () => this.router.navigate(['/login'])
    )
  }

}
