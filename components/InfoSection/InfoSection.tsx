import { VFC } from 'react'

import { BottomPart } from './BottomPart'
import { TopPart } from './TopPart'

export const InfoSection: VFC = () => (
  <section className="relative bg-main-background">
    <TopPart />
    <BottomPart />
  </section>
)
