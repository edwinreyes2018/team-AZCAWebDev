import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/modules/services/chat.service';

@Component({
  selector: 'app-chatboard',
  templateUrl: './chatboard.component.html',
  styleUrls: ['./chatboard.component.css']
})
export class ChatboardComponent implements OnInit {
  Chat: Chat[] = [];

  constructor(private ChatService: ChatService) { }

  ngOnInit() {
    this.getChat();
  }

  getChat(): void {
    this.ChatService.getChats().subscribe(Chat => this.Chat = Chat.slice(1, 5));
  }

}
