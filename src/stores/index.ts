import {TractorsStore} from './Tractor/tractor';
import {createContext} from 'react';

export class RootStore {
	tractors: TractorsStore;

	constructor() {
		this.tractors = new TractorsStore();
	}
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
