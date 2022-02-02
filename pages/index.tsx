import Head from 'next/head'

import { CookieBanner } from 'components/CookieBanner'
import { Footer } from 'components/Footer'
import { HeroHeader } from 'components/HeroHeader'
import { InfoSection } from 'components/InfoSection'
import { TopNavigation } from 'components/TopNavigation'

export default function Index() {
  return (
    <>
      <Head>
        <title>Magik</title>
      </Head>
      <div className="relative overflow-hidden bg-main-background">
        <TopNavigation />
        <main>
          <HeroHeader />
          <InfoSection />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </>
  )
}
