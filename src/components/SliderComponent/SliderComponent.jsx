import React from 'react'
import slider1 from '../../assets/images/slider1.PNG'

const SliderComponent = () => {
  return (
    <div>
        <div>
            <img style={{width: '100%', height: '663px'}} src={slider1} alt="" />
        </div>
    <div style={{display:'flex', justifyContent:' center',  flexDirection: 'column', alignItems: 'center',height:'300px',width: '100%'}}>
        <div style={{color:'#222', fontSize:'16px', lineHeight:'22px',textAlign:'center' }}>
            <h2>Động lực cho tốc độ</h2>
            <p> 
            Mùa lễ này, hãy tặng cho những người thân yêu chơi gôn của bạn món quà về khoảng cách, đồng thời tận hưởng khoản tiết kiệm lớn khi mua các sản phẩm hàng đầu của chúng tôi.
            </p>
        </div>
        <div>
            <a href="shop-now" style={{display: 'inline-block', padding:'22px 20px', textAlign:'center', textDecoration: 'none', color:'white',backgroundColor: '#CF202F', fontSize:'16px', margin:'4px 2px', cursor:'pointer' }}
            > Mua sắm ngay
            </a>
        </div>
    </div>
    </div>
  )
}

export default SliderComponent