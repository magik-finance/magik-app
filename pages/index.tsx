import { HeroHeader } from 'components/HeroHeader'
import { InfoSection } from 'components/InfoSection'
import { JoinOurCommunity } from 'components/JoinOurCommunity'
import { SignUpForBetaSmallForm } from 'components/SignUpForBetaSmallForm'
import { TopNavigation } from 'components/TopNavigation'

export default function Index() {
  return (
    <div className="bg-main-background">
      <div className="relative overflow-hidden">
        <TopNavigation />
        <main>
          <HeroHeader />
          <InfoSection />
        </main>
        <footer>
          <SignUpForBetaSmallForm />
          <JoinOurCommunity />
        </footer>
      </div>
    </div>
  )
}
