import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FactureComponent } from './facture/facture.component';
import { FacturesComponent } from './factures/factures.component';
import { UsersComponent } from './users/users.component';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { BoardComptableComponent } from './board-comptable/board-comptable.component';
import { FactureAgentComponent } from './board-agent/factures_agent/facture-agent/facture-agent.component';
import { CommandeComponent } from './board-agent/commande/commande/commande.component';
import { CommandeUserComponent } from './interfaceuser/commande/commande.component';
import { ProduitsComponent } from './interfaceuser/produits/produits.component';
import { PanierComponent } from './interfaceuser/panier/panier.component';
import { InterfaceuserComponent } from './interfaceuser/interfaceuser/interfaceuser.component';
import { AgentfacturedetailsComponent } from './board-agent/agentfacturedetails/agentfacturedetails.component';
import { ProduitsAdminComponent } from './board-admin/produits-admin/produits-admin.component';
import { JournauxComponent } from './board-comptable/journaux/journaux.component';
import { AjoutJournauxComponent } from './board-comptable/ajout-journaux/ajout-journaux.component';
import { DetailsjournauxComponent } from './board-comptable/detailsjournaux/detailsjournaux.component';
import { ProfileComponent } from './board-admin/profile/profile.component';
import { EditProfileComponent } from './board-admin/edit-profile/edit-profile.component';
import { FactureComptableComponent } from './board-comptable/facture-comptable/facture-comptable.component';
import { ReglementComponent } from './board-comptable/reglement/reglement.component';
import { DepensesComponent } from './board-comptable/depenses/depenses.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'interfaceuser', component: InterfaceuserComponent, children: [
      { path: '', redirectTo: 'produits', pathMatch: 'full' },
      { path: 'produits', component: ProduitsComponent },
      { path: 'panier', component: PanierComponent },
      { path: 'commande', component: CommandeUserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent }

  ] },
  { path: 'mod', component: BoardModeratorComponent },
  {
    path: 'admin', component: BoardAdminComponent, children: [

      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'factures', component: FacturesComponent },
      { path: 'users', component: UsersComponent },
      { path: 'produits', component: ProduitsAdminComponent },
      { path: 'facture/:numFacture', component: AgentfacturedetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent }
    ]
  },
  {
    path: 'agent', component: BoardAgentComponent, children: [

      { path: '', redirectTo: 'commandes', pathMatch: 'full' },
      { path: 'factures', component: FactureAgentComponent },
      { path: 'commandes', component: CommandeComponent },
      { path: 'facture/:numFacture', component: AgentfacturedetailsComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent }


    ]
  },
  {
    path: 'comptable', component: BoardComptableComponent, children: [

      { path: '', redirectTo: 'journaux', pathMatch: 'full' },
      { path: 'factures', component: FactureComptableComponent },
      { path: 'journaux', component: JournauxComponent },
      { path: 'add-journaux', component: AjoutJournauxComponent },
      { path: 'facture/:numFacture', component: AgentfacturedetailsComponent },
      { path: 'journauxdetails/:numJournaux', component: DetailsjournauxComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'editprofile', component: EditProfileComponent },
      { path: 'reglement', component: ReglementComponent },
      { path: 'depenses', component: DepensesComponent },

  ] },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
