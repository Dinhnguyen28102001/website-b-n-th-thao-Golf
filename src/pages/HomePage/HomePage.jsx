import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
import ProductTag from '../../components/ProductTag/ProductTag'
import GolferTaylor from '../../components/GolferTaylor/GolferTaylor'
import NewsGolf from '../../components/GolferTaylor/News'


const HomePage = () => {
return (
    <div>
      <div className='body' style={{ width: '100%', backgroundColor: '#fff', }}>
      <SliderComponent/>
      <div id="container" style={{ margin: '0 auto' }}>
      <ProductTag/> 
        </div>
      </div>
      <GolferTaylor/>
      <NewsGolf/>
      <FooterComponent/>
      </div>
  )
}

export default HomePage 