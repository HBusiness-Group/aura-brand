import PageTransition from '@components/ui/PageTransition'
import HeroSection from '@components/sections/HeroSection'
import MarqueeSection from '@components/sections/MarqueeSection'
import FeaturedSection from '@components/sections/FeaturedSection'
import ManifestoSection from '@components/sections/ManifestoSection'
import EditorialSection from '@components/sections/EditorialSection'

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeSection />
      <FeaturedSection />
      <ManifestoSection />
      <EditorialSection />
    </PageTransition>
  )
}
