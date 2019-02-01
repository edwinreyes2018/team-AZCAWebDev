import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/app/modules/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboardComponent } from './components/chatboard/chatboard.component';
import { ChatDetailComponent } from './components/chat-detail/chat-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ChatsComponent } from './components/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatboardComponent,
    ChatDetailComponent,
    MessagesComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
