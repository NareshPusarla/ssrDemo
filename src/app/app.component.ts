import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { GlobalServiceService } from './service/global-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ssrDemo';

  constructor(private windowRef: GlobalServiceService, @Inject(PLATFORM_ID) private platformId: object) {
    this.windowRef = windowRef.getWindow();
  }

  ngOnInit() {
      if (isPlatformBrowser(this.platformId)) {
        this.windowRef['scrollTo'](0, 0);
      }
  }
}
