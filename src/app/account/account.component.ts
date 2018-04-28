import { Component, Input } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // inject the service in the constructor
  constructor(private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // emitting event from accountsService
    this.accountsService.statusUpdated.emit(status);
  }
}
