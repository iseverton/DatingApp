import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../layout/nav/nav';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../core/services/account-service';
import { stringify } from 'postcss';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Dating app';

  private http = inject(HttpClient);
  protected members = signal<any>([]);

  protected accountService = inject(AccountService);

  async ngOnInit() {
    this.members.set(await this.getMembers());
    this.setCurrentuser();
  }

  setCurrentuser() {
    const userString = localStorage.getItem('user');
    if (!userString) return;
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
