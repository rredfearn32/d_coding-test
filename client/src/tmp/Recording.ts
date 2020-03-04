export default class Recording {
    private timestamp: number;
    private email: string;
    private lengthSeconds: number;
    private data: Blob[];

    constructor(timestamp: number, email: string, lengthSeconds: number, data: Blob[]) {
        this.data = data;
        this.lengthSeconds = lengthSeconds;
        this.email = email;
        this.timestamp = timestamp;
    }
}