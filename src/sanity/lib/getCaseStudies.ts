import {createClient, groq} from 'next-sanity'

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

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID')
}

if (!dataset) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_SANITY_DATASET')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-08-21',
  useCdn: true,
})

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
  return client.fetch<CaseStudy[]>(caseStudiesQuery)
}
