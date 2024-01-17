import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'google-analytics';

  sendEvent(number: number) {
    switch (number) {
      case 0:
        window.dataLayer.push({
          event: 'button_click',
          origin: 'app.component',
          page_title: 'App Component',
          logged_in: false,
          user_type: 'admin',
          contact_id: '123456',
          event_action: 'N/A',
          event_label: 'Send Click Event'
        });
        break;
      case 1:
        window.dataLayer.push({
          event: 'button_click',
          origin: 'app.component',
          page_title: 'Second Page',
          logged_in: false,
          user_type: 'admin',
          contact_id: '123456',
          event_action: 'N/A',
          event_label: 'Send Click Event'
        });
        break;
        case 2:
          window.dataLayer.push({
            event: 'button_click',
            origin: 'app.component',
            page_title: 'Third Page',
            logged_in: false,
            user_type: 'admin',
            contact_id: '123456',
            event_action: 'N/A',
            event_label: 'Send Click Event'
          });
          break;
      default:

    }
    
  }
}
