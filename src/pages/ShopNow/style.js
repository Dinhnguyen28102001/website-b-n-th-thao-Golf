import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";



export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: #9255FD;
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #9255FD;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'}
`

export const WrapperProducts = styled.div`
    display: flex;
    display: flex;
    margin-top:20px;
    flex-wrap: wrap;
`
export const ButttonText = styled.div`
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
padding: 32px 30px 16px 30px;
justify-content: flex-start !important;
`
export const ButttonTextClick = styled.button`
display: inline-block;
font-family: var(--primary-font);
font-size: .8175rem;
letter-spacing: 2px;
line-height: 1.0625rem;
font-weight: 700;
position: relative;
text-transform: uppercase;
transition: all 200ms ease-out;
text-align: center;
font-size: 12px;
user-select: none;
border-width: 0;
border-radius: 0;
padding: 22px 20px 22px 20px;
background-color: #000;
color: #fff;
text-decoration: none;
`
export const ButttonTextText = styled.div`
    cursor: pointer;
    display: inline-block;
    font-family: var(--primary-font);
    font-size: .8175rem;
    letter-spacing: 2px;
    line-height: 1.0625rem;
    font-weight: 700;
    position: relative;
    text-transform: uppercase;
    transition: all 200ms ease-out;
    text-decoration: none;
    text-align: center;
    user-select: none;
    border-width: 0;
    border-radius: 0;
    padding: 22px 20px 22px 20px;
`
export const ButttonViewText = styled.span`
cursor: pointer;
font-family: var(--primary-font);
font-size: .8175rem;
letter-spacing: 2px;
line-height: 1.0625rem;
font-weight: 700;
text-transform: uppercase;
text-align: center;
user-select: none;

`
export const ButttonSreachText = styled.div`
flex: 0 0 100%;
max-width: 100%;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
`
