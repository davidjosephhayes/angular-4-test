// generic comment, can be set on any entity type (eg photo)
export class Comment {
    id: Number;
    entityType: String;
    entityId: Number;
    // timestamp: number;
    datetime: Date;
    username: String;
	content: String;
}
