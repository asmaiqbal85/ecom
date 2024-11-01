import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product/product'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}
