import React from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import { WrapperButtonMore, WrapperProducts,ButttonText, ButttonTextClick,ButttonTextText,ButttonSreachText} from './style'
import {Col, Row } from 'antd'
import bannerpd from '../../assets/images/bannerpd.PNG'

const ShopNow = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState()
    
    const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)
    return res
    }
const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })
  return (
    <Loading isLoading={loading || isLoading}>
    <div style={{ width: '100%', background: '#fff'}}>
    <div style={{position:'relative', backgroundSize:'cover'}}>
    <img style={{height:'250px', width: '100%'}} src={bannerpd} alt="" />
    </div>
    <ButttonSreachText>
    <ButttonText>
        <div>
            <ButttonTextClick>Filter & Sort</ButttonTextClick>
        </div>
        <ButttonTextText>
            <span>Wellcome</span>

        </ButttonTextText>
    </ButttonText>
    </ButttonSreachText>
    <div style={{ margin: '0 auto', height: '100%' }}>
    <Row style={{display: 'flex', flexWrap: 'wrap', marginLeft:'-15px', marginRight:'-15px',justifyContent:'center'}}>
            {/*san pham*/}
              <WrapperProducts>
              {products?.data?.map((product) => {
                  return (
                    <CardComponent
                      key={product._id}
                      countInStock={product.countInStock}
                      description={product.description}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      rating={product.rating}
                      type={product.type}
                      selled={product.selled}
                      discount={product.discount}
                      id={product._id}
                    />
  
                  )})}
            </WrapperProducts> 
            </Row>  
            </div>
            </div>
      </Loading>
    )
  }
  
export default ShopNow    