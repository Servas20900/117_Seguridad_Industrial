/**
 * Reusable Tailwind class strings for primitives repeated across many pages
 * (mirrors the "btnPrimary / sectionTitle as JS constants" pattern instead of
 * introducing a component-class layer in CSS).
 */

export const eyebrow =
  'mb-2 block text-xs font-bold uppercase tracking-[0.08em] text-accent-strong'

export const lede = 'max-w-[720px] text-[1.05rem] leading-relaxed text-text-subtle'

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-md px-[18px] py-3 text-base font-bold no-underline transition-all duration-200 ease-out cursor-pointer border border-transparent'

export const btnPrimary = `${btnBase} bg-accent text-[#0b0c10] shadow-soft hover:-translate-y-0.5 hover:shadow-strong`
export const btnGhost = `${btnBase} border-border bg-transparent text-text hover:border-accent hover:text-accent-strong`
export const btnFull = 'w-full justify-center'

/** Small nav/link pill (Topbar "Contactar", "Ver todos", etc.) */
export const navPill =
  'inline-flex items-center gap-2 rounded-full border border-border bg-surface-strong px-3.5 py-2.5 font-semibold text-text no-underline transition-all duration-200 ease-out hover:border-accent hover:bg-accent hover:text-[#0b0c10]'

/** Larger accent pill used in PillGroup (keywords/standards on detail pages) */
export const badgePillAccent =
  'inline-block whitespace-nowrap rounded-full border border-accent bg-accent px-[18px] py-2.5 text-sm font-semibold text-[#0b0c10] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-strong hover:bg-accent-strong hover:shadow-soft'

export const badgePillStandard =
  'inline-block whitespace-nowrap rounded-full border border-accent bg-accent/18 px-[18px] py-2.5 text-sm font-semibold text-text transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent-strong hover:bg-accent/25'

/** Course/health/equipment listing card (CourseCard, ItemCard) */
export const card =
  'group relative grid h-full w-full cursor-pointer grid-rows-[auto_1fr_auto] overflow-hidden rounded-lg border border-border bg-surface shadow-soft transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-accent/45 hover:shadow-strong'
export const cardImageWrap = 'flex aspect-video w-full items-center justify-center overflow-hidden bg-surface-strong'
export const cardImage = 'h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105'
export const cardBadge =
  'absolute top-3 right-3 z-10 rounded-md border-[1.5px] border-accent/40 bg-black/85 px-3 py-1.5 text-[0.7rem] font-bold tracking-wide text-accent uppercase backdrop-blur-sm'
export const cardContent = 'grid gap-3 p-5 pr-[50px] max-[640px]:p-4'
export const cardTitle = 'm-0 text-[1.1rem] leading-tight text-text max-[640px]:text-base'
export const cardSummary = 'm-0 text-[0.95rem] leading-relaxed text-text-subtle max-[640px]:text-sm'
export const cardMetaRow = 'flex flex-wrap gap-2 text-[0.85rem] text-text-subtle max-[640px]:text-xs'
export const cardMetaPill = 'rounded-full bg-surface-strong px-2.5 py-1'
export const cardPillsRow = 'mt-1 flex flex-wrap gap-1.5'
export const cardPill = 'inline-block whitespace-nowrap rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent-strong'
export const cardFooter = 'grid gap-3 px-5 pb-4 max-[640px]:px-4 max-[640px]:pt-2.5 max-[640px]:pb-3.5'
export const cardAction =
  "inline-flex w-fit items-center gap-1.5 border-none bg-none p-0 text-[0.9rem] font-semibold text-accent-strong transition-[gap] duration-200 cursor-pointer after:content-['→'] after:transition-transform after:duration-200 group-hover:after:translate-x-1 max-[640px]:text-[0.85rem]"

/** Detail pages (course/health/equipment detail + not-found) */
export const detailPanel = 'mx-auto max-w-[1100px] px-8 py-10 max-[900px]:px-6 max-[900px]:py-8 max-[640px]:px-4 max-[640px]:py-6'
export const detailBtnBack =
  'mb-8 inline-flex items-center gap-2 rounded-md border border-accent bg-transparent px-4 py-2.5 font-semibold text-accent transition-all duration-200 cursor-pointer hover:bg-accent hover:text-[#0b0c10] max-[640px]:w-full max-[640px]:justify-center'
export const detailHeader = 'mb-12 border-b border-border pb-10 max-[900px]:mb-10 max-[900px]:pb-8 max-[640px]:mb-8 max-[640px]:pb-6'
export const detailHeaderTitle = 'my-3 text-[clamp(2rem,5vw,2.8rem)] leading-tight max-[900px]:text-[clamp(1.6rem,4vw,2.2rem)] max-[640px]:text-2xl'
export const detailHeaderLede = 'mt-4 max-w-[720px]'
export const detailContent = 'grid gap-8'

export const detailSectionWrap = 'grid gap-4'
export const detailSectionTitle = 'm-0 border-b-2 border-accent pb-3 text-2xl max-[640px]:text-[1.3rem]'
export const detailSectionContent = 'grid gap-6'

export const infoCardsGrid = 'grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 max-[900px]:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] max-[640px]:grid-cols-1'
export const infoStatCard =
  'grid gap-2 rounded-md border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-soft'
export const infoStatCardHighlighted = 'border-accent bg-accent/10'
export const infoStatLabel = 'm-0 text-xs font-bold tracking-[0.08em] text-accent uppercase'
export const infoStatValue = 'm-0 text-[1.1rem] font-semibold text-text'

export const itemsList = 'm-0 grid list-none gap-3 p-0'
const itemsListItemBase = 'rounded-md border-l-[3px] border-accent p-4 text-text transition-all duration-200 hover:translate-x-1 hover:shadow-soft'
export const itemsListItemDefault = `${itemsListItemBase} bg-surface-strong`
export const itemsListItemAccent = `${itemsListItemBase} bg-accent/12`
export const itemsListItemSubtle = `${itemsListItemBase} border border-border bg-transparent`

export const pillGroup = 'flex flex-wrap items-center gap-3'

export const detailCta =
  'grid gap-6 rounded-lg border border-border bg-gradient-to-br from-accent/8 to-surface p-10 text-center shadow-soft max-[900px]:p-8 max-[640px]:rounded-md max-[640px]:p-6'
export const detailCtaTitle = 'm-0 mb-3 text-[1.8rem] max-[640px]:text-xl'
export const detailCtaText = 'mx-auto m-0 max-w-[600px] text-text-subtle'
export const detailCtaButton = 'mx-auto max-w-fit max-[640px]:w-full'

export const detailNotFoundWrap = 'px-8 py-16 text-center max-[640px]:px-4 max-[640px]:py-10'
export const detailNotFoundTitle = 'mb-4 text-3xl'
export const detailNotFoundText = 'mb-8 text-[1.05rem] text-text-subtle'

/** Shared page section wrapper */
export const panel = 'px-6 py-16 max-[620px]:px-4 max-[620px]:py-6'
export const panelHead = 'mx-auto mb-7 max-w-[1200px] px-3'
export const panelHeadTitle = 'mb-2.5 text-[clamp(1.6rem,3vw,2.2rem)] tracking-tight'

/** Contact page + form */
export const contactCard = 'grid gap-3 rounded-lg border border-border bg-surface p-4.5 shadow-soft'
export const formLabel = 'grid gap-1.5 font-semibold text-text'
export const formInput =
  'rounded-sm border border-border bg-surface-strong p-2.5 font-body text-text focus:border-accent focus:outline-2 focus:outline-accent'
export const formHint = 'text-sm text-text-subtle'
export const contactGrid = 'mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5 max-[900px]:grid-cols-1'
export const contactList = 'm-0 grid list-none gap-2 p-0'
export const noteText = 'text-sm text-text-subtle'

/** Shared card grids */
export const cardGrid = 'grid grid-cols-[repeat(auto-fit,minmax(260px,320px))] justify-items-center gap-5 max-[900px]:grid-cols-1'
export const aboutGrid = 'mx-auto grid max-w-[1100px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 max-[900px]:grid-cols-1'
export const glassCard = 'grid gap-1.5 rounded-md border border-black/6 bg-white/72 p-5.5 shadow-soft backdrop-blur-[16px]'

/** Hero sections */
export const heroSection = 'px-6 pt-13 pb-10 max-[620px]:px-4.5 max-[620px]:pt-12 max-[620px]:pb-8'
export const heroHome = 'pt-13 max-[620px]:pt-12'
export const heroBannerFrame =
  'mx-auto aspect-[21/7] w-full max-w-[1200px] overflow-hidden rounded-lg border border-border bg-[linear-gradient(135deg,#0f1115,#1f2430)] shadow-strong max-[900px]:aspect-[16/7] max-[620px]:aspect-[16/10] max-[620px]:rounded-md'
export const heroContentHome = 'mx-auto mt-7 max-w-[1200px] max-[900px]:mt-5.5'
export const heroCopyHome = 'max-w-[980px]'
export const heroTitle = 'text-[clamp(2.1rem,3.8vw,3.1rem)] leading-[1.15] tracking-[-0.01em] max-[620px]:text-[1.85rem]'
export const heroLede = 'max-w-[920px] text-[clamp(1rem,1.4vw,1.12rem)] max-[620px]:text-base'
export const ctaRow = 'mb-4.5 flex flex-wrap gap-3'

/** Home page sections */
export const homeSection = 'mx-auto max-w-[1200px] px-3'
export const homeSectionHead = 'mb-10 flex flex-wrap items-start justify-between gap-12 max-[620px]:mb-6 max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-4'
export const homeSectionHeadTitle = 'mb-3 text-[clamp(1.4rem,2.5vw,2rem)]'
export const homeViewAll = 'flex-shrink-0 whitespace-nowrap bg-accent border-accent text-[#0b0c10] hover:bg-accent-strong hover:border-accent-strong'
