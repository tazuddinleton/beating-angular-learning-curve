export class Shelf<T> {
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

    *[Symbol.iterator]() {
        for (let book of this._items) {
            yield book;
        }
    }
}

export class Book {
    constructor(public title: string, public author: string) {}
}
