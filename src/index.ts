import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const charactersCollection = new CharactersCollection('sdfsdfl');
// charactersCollection.sort();
// console.log(charactersCollection);

// const numbersCollection = new NumbersCollection([1, 3, -4, 0]);
// numbersCollection.sort();
// console.log(numbersCollection);

const list = new LinkedList();

list.add(500);
list.add(5);
list.add(400);
list.sort();
list.print();
