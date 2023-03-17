import { Category } from '../classes/Category';

export interface IItemCategory {
    category: Category,
    haldlerPress: (id?: string) => void
}