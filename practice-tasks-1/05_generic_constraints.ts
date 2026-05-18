function logLength<T extends {length: number}>(input: T): number {
    return input.length;
}