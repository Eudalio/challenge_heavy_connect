import {makeObservable, observable, action, computed} from 'mobx';

export type TractorType = {
	key: string;
	name: string;
	id: string;
	horsePower: number;
	brand: string;
	purchaseDate: Date;
};

let initialState: TractorType[] = [
	{
		name: 'Xuxa D - 9R 390',
		id: 'ID: 00098761',
		key: String(Math.random()),
		horsePower: 200,
		brand: 'John Deere',
		purchaseDate: new Date(),
	},
	{
		name: 'John D - 9R 390',
		id: 'ID: 00098761',
		key: String(Math.random()),
		horsePower: 200,
		brand: 'John Deere',
		purchaseDate: new Date(),
	},
	{
		name: 'Bruno D - 9R 390',
		id: 'ID: 00098761',
		key: String(Math.random()),
		horsePower: 200,
		brand: 'John Deere',
		purchaseDate: new Date(),
	},
	{
		name: 'Antonio D - 9R 390',
		id: 'ID: 00098761',
		key: String(Math.random()),
		horsePower: 200,
		brand: 'John Deere',
		purchaseDate: new Date(),
	},
	{
		name: 'Leo D - 9R 390',
		id: 'ID: 00098761',
		key: String(Math.random()),
		horsePower: 200,
		brand: 'John Deere',
		purchaseDate: new Date(),
	},
];

export class TractorsStore {
	tractors = [...initialState];

	constructor() {
		makeObservable(this, {
			tractors: observable,
			addTractor: action,
			sortByName: action,
			countTractors: computed,
		});
	}

	addTractor = (newTractor: TractorType) => {
		const foundItem = this.tractors.find(item => item.key === newTractor.key);
		if (foundItem) {
			this.tractors = this.tractors.map(item => {
				if (item.key === newTractor.key) {
					return newTractor;
				}
				return item;
			});
		} else {
			this.tractors = [...this.tractors, newTractor];
		}
	};

	sortByName = () => {
		this.tractors = this.tractors.sort(function (a, b) {
			return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
		});
	};

	get countTractors() {
		return this.tractors.length;
	}
}
