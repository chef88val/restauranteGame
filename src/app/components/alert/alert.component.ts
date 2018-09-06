import { Component, OnInit, Input } from '@angular/core';
import { Alert, AlertType } from '../../class/alert';
import { AlertsService } from '../../services/alerts.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable, Subject } from 'rxjs';
@Component({
  // moduleId: module.id,
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  animations: [
    trigger('alertState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AlertComponent implements OnInit {
  @Input() id: string;

  alerts: Alert[] = [];

  constructor(private alertService: AlertsService) { }

  ngOnInit() {
      console.log('AlertComponent');
      this.alertService.getAlert(this.id).subscribe((alert: Alert) => {
        console.log('AlertComponent.subscribe');
          if (!alert.message) {
              // clear alerts when an empty alert is received
              this.alerts = [];
              return;
          }

          // add alert to array
          this.alerts.push(alert);
          console.log(this.alerts);
        });
    }
    
    removeAlert(alert: Alert) {
        this.alerts = this.alerts.filter(x => x !== alert);
        console.log(this.alerts);
  }

  cssClass(alert: Alert) {
      if (!alert) {
          return;
      }

      // return css class based on alert type
      switch (alert.type) {
          case AlertType.Success:
              return 'alert alert-success';
          case AlertType.Error:
              return 'alert alert-danger';
          case AlertType.Info:
              return 'alert alert-info';
          case AlertType.Warning:
              return 'alert alert-warning';
      }
  }
}
