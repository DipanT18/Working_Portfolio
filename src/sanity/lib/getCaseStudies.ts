import {groq} from 'next-sanity'

import {client} from './client'

export interface CaseStudy {
  id: string
  title: string
  situation: string
  architectureSummary: string
  tags: string[]
  metrics: string[]
  loomUrl: string
  demoUrl: string
  githubUrl: string
}

const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(_createdAt desc) {
    "id": _id,
    title,
    situation,
    architectureSummary,
    "tags": coalesce(tags, []),
    "metrics": coalesce(metrics, []),
    loomUrl,
    demoUrl,
    githubUrl
  }
`

export async function getCaseStudies(): Promise<CaseStudy[]> {
  if (!client) {
    return []
  }

  try {
    return await client.fetch<CaseStudy[]>(caseStudiesQuery)
  } catch {
    return []
  }
}
