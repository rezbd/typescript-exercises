interface MyDocument {
    title: string;
    content: string;
    author: string;
}

type Draft<T> = {
    readonly [K in keyof T]?: T[K];
}

const myDraft: Draft<MyDocument> = {
    title: "hello"
};