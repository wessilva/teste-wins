
import { ClothesSection } from './components/ClothesSection/ClothesSection'
import { MainFooter } from './components/footer/MainFooter'
import { MainHeader } from './components/Header/MainHeader'
import { HeroSection } from './components/HeroSection/HeroSection'
import { HighlightSection } from './components/HighlightSection/HighlightSection'
import { PedesSection } from './components/PedsSection/PedesSection'
import { ProductHighlightSection } from './components/ProductHighlightSection/ProductHighlightSection'


function App() {

  return (
    <>
      <MainHeader />
      <HeroSection />
      <ClothesSection />
      <HighlightSection />
      <ProductHighlightSection />
      <PedesSection />
      <MainFooter />
    </>
  )
}

export default App
