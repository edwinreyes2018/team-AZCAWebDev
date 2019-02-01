import { Component, OnInit } from '@angular/core';

import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/modules/services/chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {
  Chat: Chat[];

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.getChats();
  }

  getChats(): void {
    this.ChatService.getChats().subscribe(Chat => this.Chat = Chat);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.ChatService.addChat({ name } as Chat)
      .subscribe(Chat => {
        this.Chat.push(Chat);
      });
  }

  delete(Chat: Chat): void {
    this.Chat = this.Chat.filter(h => h !== Chat);
    this.ChatService.deleteChat(Chat).subscribe();
  }

}
