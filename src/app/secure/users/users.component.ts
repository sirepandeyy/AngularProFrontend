import { User } from './../../interfaces/user';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = []
  page=1
  lastPage: number;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.load()
  }

  load(page = 1): void {
    this.userService.all(this.page).subscribe(
      (res: any) => {
        this.users = res.data;
        this.lastPage = res.meta.last_page;
      }
    );
  }

  delete(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.userService.delete(id).subscribe(
        () => {
          this.users = this.users.filter(u => u.id !== id);
        }
      );
    }
  }

}
