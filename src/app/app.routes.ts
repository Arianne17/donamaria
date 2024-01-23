import { Routes } from '@angular/router';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { ServicosComponent } from './page/servicos/servicos.component';
import { DicasComponent } from './page/dicas/dicas.component';
import { QuemsomosComponent } from './page/quemsomos/quemsomos.component';



export const routes: Routes = [
    { path: ' ' , component : NavbarComponent },
    { path: 'servicos' , component : ServicosComponent },
    { path: 'dicas' , component : DicasComponent },
    { path: 'quemsomos ' , component : QuemsomosComponent},
    { path: ' ' , component : NavbarComponent }

];
