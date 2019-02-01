import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/modules/services/chat.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
@Input() Chat: Chat;

  constructor(
    private route: ActivatedRoute,
    private ChatService: ChatService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getChat();
  }

  getChat(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ChatService.getChat(id)
    .subscribe(Chat => this.Chat = Chat);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.ChatService.updateChat(this.Chat)
      .subscribe(() => this.goBack());
  }
}
