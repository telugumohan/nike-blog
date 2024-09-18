import React from 'react'
import Nav from './components/Nav'
import {Hero, PopularProducts,SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className='padding-x'>
        <PopularProducts />
      </section>
      <section className='padding'>
        <SuperQuality />
      </section>
      <section className='padding'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='padding-y'>
        <CustomerReviews />
      </section>
      <section className='padding'>
        <Subscribe />
      </section>
      <section className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}

export default App
