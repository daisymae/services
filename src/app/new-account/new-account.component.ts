import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  // inject the service in the constructor
  constructor(private logService: LoggingService,
  private accountsService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    this.logService.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
