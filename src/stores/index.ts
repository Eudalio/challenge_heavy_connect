import {TractorsStore} from './tractor';
import {createContext, useContext} from 'react';

export class RootStore {
	tractors: TractorsStore;

	constructor() {
		this.tractors = new TractorsStore();
	}
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
