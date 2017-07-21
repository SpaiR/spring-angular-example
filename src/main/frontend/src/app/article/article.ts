export class Article {
    constructor(
        public id?: number,
        public title?: string,
        public postDate?: Date,
        public imageLink?: string,
        public previewText?: string,
        public text?: string,
        public likes?: number
    ) {}
}