import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatboardComponent } from 'src/app/components/chatboard/chatboard.component';
import { ChatsComponent } from 'src/app/components/chats/chats.component';
import { ChatDetailComponent } from 'src/app/components/chat-detail/chat-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/chatboard', pathMatch: 'full'},
  { path: 'chatboard', component: ChatboardComponent },
  { path: 'chat/:id', component: ChatDetailComponent },
  { path: 'chat', component: ChatsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
