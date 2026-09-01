import { createClient } from 'next-sanity'

import { apiVersion, dataset, hasSanityEnv, projectId } from '../env'

export const client = hasSanityEnv
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
    })
  : null
