import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { single, Subscriber } from 'rxjs';
import { Result } from 'postcss';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected accountService = inject(AccountService);

  protected creds: any = {};

  login() {
    this.accountService.login(this.creds).subscribe({
      next: (result) => {
        console.log(result), (this.creds = {});
      },
      error: (error) => {
        alert(error);
      },
    });
  }

  logout() {
    this.accountService.logout();
  }
}
