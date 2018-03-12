import {Item} from './item';

export class DataService {
	
	private data: Item [] = [
		{ name: "Item1", cost: 10, amount:2, status: false },
        { name: "Item2", cost: 10, amount:2, status: true },
        { name: "Item3", cost: 10, amount:2, status: true },
        { name: "Item4", cost: 10, amount:2, status: true }
	]

	getData(): Item[] {

		return this.data;
	}

	addData (name: string, cost: number, amount: number, status: boolean ){

		this.data.push(new Item(name, cost, amount, status));
	}
}
