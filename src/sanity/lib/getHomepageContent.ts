import {groq} from 'next-sanity'

import {client} from './client'

interface LinkItem {
  label: string
  href: string
}

interface ProcessStep {
  title: string
  description: string
}

export interface HomepageContent {
  navWordmark: string
  navLinks: LinkItem[]
  availabilityText: string
  availabilityHref: string
  navMenuHref: string
  heroEyebrow: string
  heroEyebrowMeta: string
  heroHeadingLead: string
  heroHeadingEmphasis: string
  heroHeadingTrail: string
  heroIntro: string
  heroPrimaryCtaLabel: string
  heroPrimaryCtaHref: string
  heroCircleCtaHref: string
  heroScrollLabel: string
  heroProgressLabel: string
  heroFigureName: string
  heroFigureMonogram: string
  heroFigureCaptionLineOne: string
  heroFigureCaptionLineTwo: string
  aboutSectionNumber: string
  aboutSectionTitle: string
  aboutHeadingLead: string
  aboutHeadingEmphasis: string
  aboutParagraphOne: string
  aboutParagraphTwo: string
  aboutConversationLabel: string
  aboutConversationHref: string
  capabilities: string[]
  workSectionNumber: string
  workSectionTitle: string
  workCountSuffix: string
  workHeadingLead: string
  workHeadingEmphasis: string
  workDescription: string
  caseStudyWatchLabel: string
  caseStudyDemoLabel: string
  caseStudyGithubLabel: string
  caseStudyArtMarkPrimary: string
  caseStudyArtMarkSecondary: string
  processSectionNumber: string
  processSectionTitle: string
  processHeadingLead: string
  processHeadingEmphasis: string
  processSteps: ProcessStep[]
  quoteLead: string
  quoteEmphasis: string
  quoteAuthor: string
  contactSectionNumber: string
  contactSectionTitle: string
  contactHeadingLead: string
  contactHeadingEmphasis: string
  contactPrimaryCtaLabel: string
  contactPrimaryCtaHref: string
  contactEmailLabel: string
  contactEmailHref: string
  footerScreenLineOne: string
  footerScreenHighlight: string
  footerScreenLineThree: string
  footerCopyright: string
  footerLocation: string
  socialGithubHref: string
  socialEmailHref: string
  socialBackToTopHref: string
}

const homepageContentQuery = groq`
  *[_type == "homePage"][0] {
    navWordmark,
    "navLinks": coalesce(navLinks, []),
    availabilityText,
    availabilityHref,
    navMenuHref,
    heroEyebrow,
    heroEyebrowMeta,
    heroHeadingLead,
    heroHeadingEmphasis,
    heroHeadingTrail,
    heroIntro,
    heroPrimaryCtaLabel,
    heroPrimaryCtaHref,
    heroCircleCtaHref,
    heroScrollLabel,
    heroProgressLabel,
    heroFigureName,
    heroFigureMonogram,
    heroFigureCaptionLineOne,
    heroFigureCaptionLineTwo,
    aboutSectionNumber,
    aboutSectionTitle,
    aboutHeadingLead,
    aboutHeadingEmphasis,
    aboutParagraphOne,
    aboutParagraphTwo,
    aboutConversationLabel,
    aboutConversationHref,
    "capabilities": coalesce(capabilities, []),
    workSectionNumber,
    workSectionTitle,
    workCountSuffix,
    workHeadingLead,
    workHeadingEmphasis,
    workDescription,
    caseStudyWatchLabel,
    caseStudyDemoLabel,
    caseStudyGithubLabel,
    caseStudyArtMarkPrimary,
    caseStudyArtMarkSecondary,
    processSectionNumber,
    processSectionTitle,
    processHeadingLead,
    processHeadingEmphasis,
    "processSteps": coalesce(processSteps, []),
    quoteLead,
    quoteEmphasis,
    quoteAuthor,
    contactSectionNumber,
    contactSectionTitle,
    contactHeadingLead,
    contactHeadingEmphasis,
    contactPrimaryCtaLabel,
    contactPrimaryCtaHref,
    contactEmailLabel,
    contactEmailHref,
    footerScreenLineOne,
    footerScreenHighlight,
    footerScreenLineThree,
    footerCopyright,
    footerLocation,
    socialGithubHref,
    socialEmailHref,
    socialBackToTopHref
  }
`

export async function getHomepageContent(): Promise<HomepageContent | null> {
  if (!client) {
    return null
  }

  try {
    return await client.fetch<HomepageContent | null>(homepageContentQuery)
  } catch {
    return null
  }
}
