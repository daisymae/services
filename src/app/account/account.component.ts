import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from 'app/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // inject the service in the constructor
  constructor(private logService: LoggingService) {}

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logService.logStatusChange(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
