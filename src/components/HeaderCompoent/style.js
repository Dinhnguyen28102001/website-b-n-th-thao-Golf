import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    background-color: var(--primary-color);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    height: 80px;
    padding: 10px 0;
`

export const WrapperTextHeaderLink = styled.div`
 display: flex;
flex-direction: row;
`

export const WrapperHeaderAccout = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 11px;
    font-weight: bold;
    color: black;
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
color: black;
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`