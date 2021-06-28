import { IUnit } from "../../models/Unit"

export interface IUnitAllResponse {
    payloads: IUnit[]
    count: number
}

export interface UnitRepo {
    create(payload: IUnit): Promise<IUnit>
    update(id: string, payload: IUnit): Promise<IUnit>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IUnit[]>
    findOne(query: Object): Promise<IUnit>
    findById(id: string): Promise<IUnit>
}
