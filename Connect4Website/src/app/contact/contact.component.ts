import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message.model';
import { MessageService } from '../services/message.service';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  name: String;
  email: String;
  subject: String;
  message: String;

  constructor(private messageService: MessageService, private snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  sendMessage() {
    let date = new Date().toString();
    let html = `<div>From: ${this.name}</div>
    <div>Email: <a href="mailto:${this.email}">${this.email}</a></div>
    <div>Date: ${date}</div>
    <div>Subject: ${this.subject}</div>
    <div>Message: ${this.message}</div>`;

    let message = new Message({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      date: date,
      html: html,
    });

    this.messageService.sendMessage(message);
    this.name = '';
    this.message = '';
    this.email = '';
    this.subject = '';

    const sbRef = this.snackBar.open("Message sent! We'll get back to you shortly", '', {
      duration: 5000,
    });
  }

}
