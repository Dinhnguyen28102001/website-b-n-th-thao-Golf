import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText,WrapperReportSale, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from './style'
import { StarFilled } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'

const CardComponent = (props) => {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id } = props
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }
    return (
        <div style={{width: '380px', height: '582px', backgroundColor: '#fff', display:'flex', justifyContent:'center'}}>
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '316px', height: '540px' }}
            style={{ width: '316px', height: '540px' }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} />}
            onClick={() =>  handleDetailsProduct(id)}
        >
            <WrapperReportSale>SALE</WrapperReportSale>
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '20px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '20px', color: '#333' }} />
                </span>
                <WrapperStyleTextSell> | Soid out {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText>
            <WrapperPriceText>
                <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span>
                <WrapperDiscountText>
                    - {discount || 5} %
                </WrapperDiscountText>
            </WrapperPriceText>
        </WrapperCardStyle>
        </div>
    )
}

export default CardComponent