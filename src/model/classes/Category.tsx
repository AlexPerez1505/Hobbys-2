export class Category{
    id:string;
    title:string;
    color:string;
        constructor(id:string, title:string, color:string){
            this.id = id;
            this.title = title;
            this.color = color;
        }
}

export class Hobby {
    id:string;
    categoryIds:string[];
    title:string;
    imageUrl:string;
    characteristics:string[];
        constructor(
            id:string,
            categoryIds:string[],
            title:string,
            imageUrl:string,
            charactetistics:string[]
        ) {
            this.id = id
            this.categoryIds = categoryIds
            this.title = title
            this.imageUrl = imageUrl
            this.characteristics = charactetistics
        }
}