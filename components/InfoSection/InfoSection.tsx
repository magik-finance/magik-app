import { VFC } from 'react'

import { TopPart } from './TopPart'
import { BottomPart } from './BottomPart'

export const InfoSection: VFC = () => (
  <section className="relative bg-main-background">
    <TopPart />
    <BottomPart />
  </section>
)
