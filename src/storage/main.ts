import { ProductStorage } from "./mongo/Product"

interface IStorage {
    sample: ProductStorage
}

export let storage: IStorage = {
    sample: new ProductStorage()
}
