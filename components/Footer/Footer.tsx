import { VFC } from 'react'

import { BottomNavigation } from 'components/BottomNavigation'
import { JoinOurCommunity } from 'components/JoinOurCommunity'
import { SignUpForBetaSmallForm } from 'components/SignUpForBetaSmallForm'

export const Footer: VFC = () => (
  <footer className="pb-4 md:pb-8">
    <SignUpForBetaSmallForm />
    <JoinOurCommunity className="mt-12 md:mt-8" />
    <BottomNavigation className="mt-12 md:mt-28" />
  </footer>
)
