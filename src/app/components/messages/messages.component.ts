import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/modules/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public MessageService: MessageService) { }

  ngOnInit() {
  }

}
