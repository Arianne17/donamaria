import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./sharepage/navbar/navbar.component";
import { ServicosComponent } from "./page/servicos/servicos.component";
import { DicasComponent } from './page/dicas/dicas.component';
import { QuemsomosComponent } from './page/quemsomos/quemsomos.component';

import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavbarComponent, ServicosComponent, DicasComponent, QuemsomosComponent]
})
export class AppComponent {
  title = 'donamaria';
}
