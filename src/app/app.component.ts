import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/shared/header/header.component';
import { FooterComponent } from '@components/shared/footer/footer.component';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'alianzadsh-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, Toast],
  template: `
    <p-toast />
    <alianzadsh-header></alianzadsh-header>
    <router-outlet></router-outlet>
    <alianzadsh-footer></alianzadsh-footer>
  `,
})
export class AppComponent {}
