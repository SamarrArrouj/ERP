import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { FactureComponent } from './facture/facture.component';
import { UsersComponent } from './users/users.component';
import { FacturesComponent } from './factures/factures.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { BoardComptableComponent } from './board-comptable/board-comptable.component';
import { CommandeComponent } from './board-agent/commande/commande/commande.component';
import { FactureAgentComponent } from './board-agent/factures_agent/facture-agent/facture-agent.component';
import { InterfaceuserComponent } from './interfaceuser/interfaceuser/interfaceuser.component';
import { ProduitsComponent } from './interfaceuser/produits/produits.component';
import { PanierComponent } from './interfaceuser/panier/panier.component';
import { CommandeUserComponent } from './interfaceuser/commande/commande.component';
import { AgentfacturedetailsComponent } from './board-agent/agentfacturedetails/agentfacturedetails.component';
import { ProduitsAdminComponent } from './board-admin/produits-admin/produits-admin.component';
import { JournauxComponent } from './board-comptable/journaux/journaux.component';
import { AjoutJournauxComponent } from './board-comptable/ajout-journaux/ajout-journaux.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DetailsjournauxComponent } from './board-comptable/detailsjournaux/detailsjournaux.component';
import { ProfileComponent } from './board-admin/profile/profile.component';
import { EditProfileComponent } from './board-admin/edit-profile/edit-profile.component';
import { FactureComptableComponent } from './board-comptable/facture-comptable/facture-comptable.component';
import { ReglementComponent } from './board-comptable/reglement/reglement.component';
import { DepensesComponent } from './board-comptable/depenses/depenses.component';















@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FactureComponent,
    UsersComponent,
    FacturesComponent,
    BoardAgentComponent,
    BoardComptableComponent,
    CommandeComponent,
    FactureAgentComponent,
    InterfaceuserComponent,
    ProduitsComponent,
    PanierComponent,
    CommandeUserComponent,
    AgentfacturedetailsComponent,
    ProduitsAdminComponent,
    JournauxComponent,
    AjoutJournauxComponent,
    DetailsjournauxComponent,
    ProfileComponent,
    EditProfileComponent,
    FactureComptableComponent,
    ReglementComponent,
    DepensesComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularEditorModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
