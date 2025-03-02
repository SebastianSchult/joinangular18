import { Routes } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HelpComponent } from './pages/help/help.component';
import { LoginComponent } from './pages/login/login.component';
import { LegalNoticeComponent } from './shared/pages/legal-notice/legal-notice.component';
import { PrivacyComponent } from './shared/pages/privacy/privacy.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'board', component: BoardComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', redirectTo: 'board' }
];