import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  // data: number[];

  constructor(public data: number[]) {
    // this.data = data;
    super();
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }
  swap(leftIndex: number, rightIndex: number): void {
    const temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }

  get length(): number {
    return this.data.length;
  }
}
