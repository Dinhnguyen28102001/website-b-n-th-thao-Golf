import React, { useEffect, useState } from 'react'
import './style.css'
import * as ProductService from '../../services/ProductService'
import { useLocation } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import { useSelector } from 'react-redux'
import Loading from '../../components/LoadingComponent/Loading'
import bannerpd from '../../assets/images/bannerpd.PNG'
import { Row } from 'antd'
import { WrapperProducts } from '../TypeProductPage/style'
import CardComponent from '../../components/CardComponent/CardComponent'
const ProductSearch=()=>{
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const { state}  = useLocation()
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const fetchProduct = async (text) => {
        setLoading(true)
        const res = await ProductService.searchProduct(text)
        if(res?.status == 'OK') {
            setLoading(false)
            setProducts(res?.data)
        }else {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(state){
            fetchProduct(state)
        }
    }, [state])

    return(
        <div className="layout-search">
            <h1>Search Product</h1>
            <Loading isLoading={loading}>
            <div style={{ width: '100%', background: '#fff'}}>
                <div style={{position:'relative', backgroundSize:'cover'}}>
                    <img style={{height:'250px', width: '100%'}} src={bannerpd} alt="" />
                </div>
                <div style={{ margin: '0 auto', height: '100%' }}>
                        <Row span={20} style={{display: 'flex', flexWrap: 'wrap', marginLeft:'-15px', marginRight:'-15px',justifyContent:'center'}}>
                            <WrapperProducts >
                                {products?.filter((pro) => {
                                    if(searchDebounce === '') {
                                        return pro
                                    }else if(pro?.name?.toLowerCase()?.includes(searchDebounce?.toLowerCase())) {
                                        return pro
                                    }
                                })?.map((product) => {
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
                                    )
                                })}
                            </WrapperProducts>
                        </Row>
                </div>
            </div>
        </Loading>
        </div>
    )
}

export default ProductSearch