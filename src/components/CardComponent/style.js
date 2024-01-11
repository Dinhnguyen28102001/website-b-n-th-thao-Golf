import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    border: 1px solid transparent;
    margin-bottom: 24px;
    padding: 16px;
    & img {
        height: 316px;
        width: 318px;
        background-color:rgb(245, 245, 245, 90%);
    },
    position: relative;
    background-color: ${props => props.disabled ? '#ccc' : '#fff'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}
`

export const StyleNameProduct = styled.div`
    font-weight: 700;
    font-size: 2rem;
        letter-spacing: .075em;
    color: rgb(56, 56, 61);
    margin-top: 10px ;
`

export const WrapperReportText = styled.div`
    font-size: 18px;
     color: #4D4D4D;
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`
export const WrapperReportSale = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: #4D4D4D;
    line-height: 20px;
    margin:0;
`

export const WrapperPriceText = styled.div`
    color:#333;
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px ;
`

export const WrapperDiscountText = styled.span`
    color: #333;
    font-size: 15px;
    font-weight: 500;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color:  color: #4D4D4D
`