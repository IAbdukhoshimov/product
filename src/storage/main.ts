import { ProductStorage } from "./mongo/Product"

interface IStorage {
    Product: ProductStorage
}

export let storage: IStorage = {
    Product: new ProductStorage()
}
