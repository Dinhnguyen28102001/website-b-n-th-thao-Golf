import React from 'react'
import  './style.css'
import imagetag1 from '../../assets/images/tagcart1.png'
import imagetag2 from '../../assets/images/tagcart2.png'
import imagetag3 from '../../assets/images/tagcart3.png'
import { Link } from 'react-router-dom';
const ProductTag = () => {
  return (
    <div>
        <div className='section__body'>
            <div className='section__cart'>
                <Link href='http://localhost:3000/product/APPAREL' className='product__tag'>
                    <div className='product__title'>
                        <img src={imagetag3}></img>
                        <p>Trình điều khiển tàng hình 2 Plus</p>
                        </div>
                </Link>
                <Link href="" className='product__tag'>
                <div className='product__title'>
                  
                        <img src={imagetag1}></img>
                        <p>Mũ xô Paddock thời đại mới</p>
                    </div>
                </Link>
                <Link href="" className='product__tag'>
                <div className='product__title'>
                  
                       <img src={imagetag2}></img>
                       <p>Mũ trùm đầu của Speed ​​Craft Driver</p>
                   
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductTag