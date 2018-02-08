import { FirebaseFlatSnapshot } from "./profile.model";

export class Comment extends FirebaseFlatSnapshot {
    comment: String;
    author: String;
    userId: String;
    time: String;

    constructor(obj?: any) {
        super(obj);
        this.comment = obj && obj.comment || '';
        this.author = obj && obj.author || '';
        this.userId = obj && obj.userId || '';
        this.time = obj && obj.time || '';
    }
}

export class Like extends FirebaseFlatSnapshot {
    userId: String;
    author: String;
    time: String;

    constructor(obj?: any) {
        super(obj);
        this.userId = obj && obj.userId || '';
        this.author = obj && obj.author || '';
        this.time = obj && obj.time || '';
    }
}

export class Photo extends FirebaseFlatSnapshot {
    public url: string;
    public caption: string;
    public uid: String;

    constructor(obj?: any) {
        super(obj);
        this.url = obj && obj.url || '';
        this.caption = obj && obj.caption || '';
        this.uid = obj && obj.uid || '';
    }
}


export class Post extends FirebaseFlatSnapshot {
    public post: String;
    public author: String;
    public userId: String;
    public time: String;
    public likes: Like[];
    public comments: Comment[];
    public photo: Photo;

    constructor(obj?: any) {
        super(obj);
        this.post = obj && obj.post || '';
        this.author = obj && obj.author || '';
        this.userId = obj && obj.userId || '';
        this.likes = obj && obj.likes || '';
        this.comments = obj && obj.comments || '';
        this.time = obj && obj.time || '';
        this.photo = obj && obj.photo || '';
    }

}