import { IGroup } from "../../models/Group"

export interface IGroupAllResponse {
    payloads: IGroup[]
    count: number
}

export interface GroupRepo {
    create(payload: IGroup): Promise<IGroup>
    update(id: string, payload: IGroup): Promise<IGroup>
    delete(id: string): Promise<any>
    find(query: Object): Promise<IGroup[]>
    findOne(query: Object): Promise<IGroup>
    findById(id: string): Promise<IGroup>
}
