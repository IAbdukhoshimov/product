import { ProductStorage } from "./mongo/Product"
import { UnitStorage } from "./mongo/Unit"
import { GroupStorage } from "./mongo/Group"

interface IStorage {
    Product: ProductStorage
    Unit: UnitStorage
    Group: GroupStorage
}

export let storage: IStorage = {
    Product: new ProductStorage(),
    Unit: new UnitStorage(),
    Group: new GroupStorage()
}
