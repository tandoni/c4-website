import { FirebaseFlatSnapshot } from "./profile.model";


export class Message extends FirebaseFlatSnapshot {
    name: String;
    email: String;
    subject: String;
    message: String;
    date: String;
    html: String;

    constructor(obj?: any) {
        super(obj);
        this.name = obj && obj.name || "";
        this.email = obj && obj.email || "";
        this.subject = obj && obj.subject || "";
        this.message = obj && obj.message || "";
        this.date = obj && obj.date || "";
        this.html = obj && obj.html || "";
    }
}