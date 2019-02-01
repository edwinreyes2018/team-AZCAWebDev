import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Chat } from 'src/app/models/chat';
import { MessageService } from 'src/app/modules/services/message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private ChatUrl = 'api/CHATS';

  constructor(
    private http: HttpClient,
    private MessageService: MessageService) { }

    getChats(): Observable<Chat[]> {
      return this.http.get<Chat[]>(this.ChatUrl);
   }

   getChat(id: number): Observable<Chat> {
     const url = `${this.ChatUrl}/${id}`;
     return this.http.get<Chat>(url);
   }

   addChat (Chat: Chat): Observable<Chat> {
     return this.http.post<Chat>(this.ChatUrl, Chat, httpOptions);
   }

   deleteChat (Chat: Chat | number): Observable<Chat> {
     const id = typeof Chat === 'number' ? Chat : Chat.id;
     const url = `${this.ChatUrl}/${id}`;
     return this.http.delete<Chat>(url, httpOptions);
   }

   updateChat (Chat: Chat): Observable<any> {
     return this.http.put(this.ChatUrl, Chat, httpOptions);
   }
 }

