import { Component, Input } from '@angular/core';
import { LoggingService } from 'app/logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // inject the service in the constructor
  constructor(private logService: LoggingService,
    private accountsService: AccountsService) { }

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.logService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
