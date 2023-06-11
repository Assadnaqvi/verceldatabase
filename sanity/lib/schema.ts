import { type SchemaTypeDefinition } from 'sanity'
import { Product } from './product'
import {category} from "./category"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Product,category],
}
