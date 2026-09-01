import type {SchemaTypeDefinition} from 'sanity'

import {caseStudyType} from './caseStudy'
import {homePageType} from './homePage'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [homePageType, caseStudyType],
}
