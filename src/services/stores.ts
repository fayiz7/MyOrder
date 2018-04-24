import { Store } from "../models/stores";
//import { Location } from "../models/location";
export class StoresService {
    private stores: Store[] = [];



    addStore(title: string, description: string, location: Location, imageUrl: string) {
        const store = new Store(title, description, location, imageUrl);
        this.stores.push(store);

    }
    loadStores() {
        return this.stores.slice();
    }

    deleteStore(index: number) {
        this.stores.splice(index, 1);
    }
}