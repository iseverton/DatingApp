import { Component, input, Pipe } from '@angular/core';
import { Member } from '../../../types/member';
import { RouterLink } from '@angular/router';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-member-card',
  imports: [RouterLink],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  member = input.required<Member>();
}
