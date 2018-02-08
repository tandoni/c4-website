export class FirebaseFlatSnapshot {
    $key?: string;

    constructor(obj?: any) {
        if (obj && obj.$key) {
            this.$key = obj.$key;
        }
    }
}
export class Bio extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}

export class Skills extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}

export class Education extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}

export class Experience extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}

export class Awards extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}

export class Projects extends FirebaseFlatSnapshot {
    One: string;
    Two: string;
    Three: string;

    constructor(obj?: any) {
        super(obj);
        this.One = obj && obj.One || "";
        this.Two = obj && obj.Two || "";
        this.Three = obj && obj.Three || "";
    }
}