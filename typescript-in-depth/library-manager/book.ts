export class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isAvailable: boolean,
    public category: Category
  ) {
    if(!id){
      throw new Error("Id must be provided");
    }
  }
}

export enum Category {
  Novel = 1,
  Drama,
  Poetry,
}
