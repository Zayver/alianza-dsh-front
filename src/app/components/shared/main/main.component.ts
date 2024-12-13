import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/shared/header/header.component';
import { FooterComponent } from '@components/shared/footer/footer.component';

@Component({
  selector: 'alianzadsh-main',
  imports: [RouterOutlet,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
