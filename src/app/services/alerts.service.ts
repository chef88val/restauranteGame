import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject, Operator  } from 'rxjs';
import { filter  } from 'rxjs/operators';
// import 'rxjs/add/operator/filter';

import { Alert, AlertType } from '../class/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
      // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
      router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              if (this.keepAfterRouteChange) {
                  // only keep for a single route change
                  this.keepAfterRouteChange = false;
              } else {
                  // clear alert messages
                  this.clear();
              }
          }
      });
  }

  // subscribe to alerts
  getAlert(alertId?: string): Observable<any> {
    return this.subject.pipe(
        filter(((x: Alert) => x && x.alertId === alertId))
    );
    // .subscribe();// .filter((x: Alert) => x && x.alertId === alertId);
  }

  // convenience methods
  success(message: string) {
    console.log('alertService');
      this.alert(new Alert({ message, type: AlertType.Success }));
  }

  error(message: string) {
      this.alert(new Alert({ message, type: AlertType.Error }));
  }

  info(message: string) {
      this.alert(new Alert({ message, type: AlertType.Info }));
  }

  warn(message: string) {
      this.alert(new Alert({ message, type: AlertType.Warning }));
  }

  // main alert method
  alert(alert: Alert) {
      this.keepAfterRouteChange = alert.keepAfterRouteChange;
      this.subject.next(alert);
  }

  // clear alerts
  clear(alertId?: string) {
      this.subject.next(new Alert({ alertId }));
  }
}