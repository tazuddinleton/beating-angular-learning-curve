
export interface IBook{
    title: string;
}

export class Shelf<T extends IBook> {
    private _items: Map<T, T> = new Map();

    add(item: T): void {
        this._items.set(item, item);
    }

    remove(item: T): T {
        this._items.delete(item);
        return item;
    }

    count(): number {
        return this._items.size;
    }

    getBookTitles():string[] {
        let titles : string[] = [];
        for(let book of this._items.values()){
            titles.push(book.title);
        }
        return titles;
    }

    *[Symbol.iterator]() {
        for (let book of this._items) {
            yield book[1];
        }
    }
}

export class Book {
    constructor(public title: string, public author: string) {}
}


