import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from './auth.service';
import { Message } from '../models/message.model';
import * as firebase from 'firebase/app';

@Injectable()
export class MessageService {

  readonly messagesPath = 'messages';

  constructor(private authService: AuthService, public db: AngularFireDatabase) {

   }

   sendMessage(message: Message) {
      firebase.database().ref(`${this.messagesPath}`).push(message);
      console.log('added to firebase.');
   }

}
