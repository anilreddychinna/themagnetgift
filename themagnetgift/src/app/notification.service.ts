import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  private vapidPublicKey = 'YOUR_VAPID_PUBLIC_KEY'; // Generate via `web-push generate-vapid-keys`

  constructor(private swPush: SwPush, private http: HttpClient) {}

  subscribeToNotifications() {
    if (this.swPush.isEnabled) {
      this.swPush.requestSubscription({
        serverPublicKey: this.vapidPublicKey
      }).then(sub => {
        console.log('Subscribed:', sub);
        // Send to server: this.http.post('/api/subscribe', sub);
      }).catch(err => console.error('Subscription failed:', err));
    }
  }

  sendNotification(title: string, body: string) {
    navigator.serviceWorker.ready.then(reg => {
      reg.showNotification(title, { body, icon: '/assets/icons/icon-72x72.png' });
    });
  }


}
