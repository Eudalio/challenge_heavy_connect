import {makeObservable, observable, action, computed} from 'mobx';
import {TractorType, InspectionType} from '../types';

export class TractorsStore {
	tractors: TractorType[] = [];
	currentTractor: TractorType | object = {};
	currentInspection: InspectionType | object = {};

	constructor() {
		makeObservable(this, {
			tractors: observable,
			currentTractor: observable,
			currentInspection: observable,
			addTractor: action,
			editTractor: action,
			sortByName: action,
			setCurrentTractor: action,
			setCurrentInspection: action,
			addInspection: action,
			removeInspection: action,
			editInspection: action,
			countTractors: computed,
			countTractorInspections: computed,
			getLastStatusInspection: computed,
		});
	}

	addTractor = (newTractor: TractorType) => {
		const foundItem = this.tractors.find(
			item => item.fieldKey === newTractor.fieldKey,
		);
		if (foundItem) {
			this.tractors = this.tractors.map(item => {
				if (item.fieldKey === newTractor.fieldKey) {
					return newTractor;
				}
				return item;
			});
		} else {
			this.tractors = [...this.tractors, newTractor];
		}
	};

	editTractor = (tractor: TractorType) => {
		const auxTractor = [...this.tractors];
		for (let index = 0; index < auxTractor.length; index++) {
			const item = auxTractor[index];
			if (item.fieldKey === tractor.fieldKey) {
				auxTractor[index] = tractor;
			}
		}
		this.tractors = [...auxTractor];
		this.setCurrentTractor(tractor);
	};

	setCurrentTractor = (tractor: TractorType) => {
		this.currentTractor = {...tractor};
	};

	setCurrentInspection = (inspection: InspectionType) => {
		this.currentInspection = {...inspection};
	};

	addInspection = (inspection: InspectionType) => {
		this.currentTractor.inspections.push(inspection);
		this.currentTractor.status = this.getLastStatusInspection;
		this.editTractor(this.currentTractor);
	};

	removeInspection = (inspection: InspectionType) => {
		const indexToBeRemoved = this.currentTractor.inspections.findIndex(
			currentInspection => currentInspection.id === inspection.id,
		);

		this.currentTractor.inspections.splice(indexToBeRemoved, 1);
		this.currentTractor.status = this.getLastStatusInspection;
		this.editTractor(this.currentTractor);
	};

	editInspection = (inspection: InspectionType) => {
		this.currentInspection = inspection;

		for (
			let index = 0;
			index < this.currentTractor.inspections.length;
			index++
		) {
			const item = this.currentTractor.inspections[index];
			if (item.id === inspection.id) {
				this.currentTractor.inspections[index] = inspection;
			}
		}

		this.currentTractor.status = this.getLastStatusInspection;
		this.editTractor(this.currentTractor);
	};

	sortByName = () => {
		this.tractors = [
			...this.tractors.sort(function (a, b) {
				return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
			}),
		];
	};

	get countTractors() {
		return this.tractors.length;
	}

	get countTractorInspections() {
		return this.currentTractor.inspections.length;
	}

	get getLastStatusInspection() {
		const length = this.countTractorInspections;
		return this.currentTractor.inspections[length - 1]?.status || 'Good';
	}
}
