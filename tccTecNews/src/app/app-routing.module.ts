import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  
  { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' }, 
  { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './pages/tab3/tab3.module#Tab3PageModule' }, 
  { path: 'tab4', loadChildren: './pages/tab4/tab4.module#Tab4PageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'hackathon', loadChildren: './eventos/hackathon/hackathon.module#HackathonPageModule' },
  { path: 'fantasy', loadChildren: './eventos/fantasy/fantasy.module#FantasyPageModule' },
  { path: 'game', loadChildren: './eventos/game/game.module#GamePageModule' },
  { path: 'junina', loadChildren: './eventos/junina/junina.module#JuninaPageModule' },
  { path: 'escola', loadChildren: './eventos/escola/escola.module#EscolaPageModule' },
  { path: 'tabs', loadChildren: './eventos/tabs/tabs.module#TabsPageModule' },
  { path: 'ds', loadChildren: './cursos/ds/ds.module#DsPageModule' },
  { path: 'adm', loadChildren: './cursos/adm/adm.module#AdmPageModule' },
  { path: 'rh', loadChildren: './cursos/rh/rh.module#RhPageModule' },
  { path: 'sj', loadChildren: './cursos/sj/sj.module#SjPageModule' },
  { path: 'marke', loadChildren: './cursos/marke/marke.module#MarkePageModule' },
  { path: 'conta', loadChildren: './cursos/conta/conta.module#ContaPageModule' },
  { path: 'vestu', loadChildren: './cursos/vestu/vestu.module#VestuPageModule' },
  { path: 'etim', loadChildren: './cursos/etim/etim.module#EtimPageModule' },
  { path: 'ead', loadChildren: './cursos/ead/ead.module#EadPageModule' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
