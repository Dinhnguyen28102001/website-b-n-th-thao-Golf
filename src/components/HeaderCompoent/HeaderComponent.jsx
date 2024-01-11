import { Badge,Col, Popover } from 'antd'
import React from 'react'
import { WrapperContentPopup, WrapperHeader, WrapperHeaderAccout,WrapperTextPLink, WrapperTextHeaderLink, WrapperTextHeaderSmall } from './style'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import ButttonInputSearch from '../ButtonInputSearch/ButttonInputSearch';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as UserService from '../../services/UserService'
import { resetUser } from '../../redux/slides/userSlide'
import { useState } from 'react';
import Loading from '../LoadingComponent/Loading';
import { useEffect } from 'react';
import { searchProduct } from '../../redux/slides/productSlide';
import logohome from '../../assets/images/taylorremove.png'
import { Link } from 'react-router-dom';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import * as ProductService from '../../services/ProductService'
import { resetOrder } from '../../redux/slides/orderSlide';
import { resetCartItemCount } from '../../redux/slides/setCartItemCount'; 

const HeaderComponent = ({ isHiddenSearch = false, isHiddenCart = false }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [search,setSearch] = useState('')
  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const order = useSelector((state) => state.order)
  const [loading, setLoading] = useState(false)
  const cartItemCount = useSelector((state) => state.cart.itemCount);


  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }
  
const handleLogout = async () => {
  try {
    // Thực hiện đăng xuất người dùng

    // Đặt lại thông tin người dùng và đơn hàng
    dispatch(resetUser());
    dispatch(resetOrder());

    // Đặt lại giỏ hàng
    dispatch(resetCartItemCount());
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error("Logout error:", error);
  }
};

  useEffect(() => {
    setLoading(true)
    setUserName(user?.name)
    setUserAvatar(user?.avatar)
    setLoading(false)
  }, [user?.name, user?.avatar])

  const content = (
    <div>
      <WrapperContentPopup onClick={() => handleClickNavigate('profile')}>Thông tin người dùng</WrapperContentPopup>
      {user?.isAdmin && (

        <WrapperContentPopup onClick={() => handleClickNavigate('admin')}>Quản lí hệ thống</WrapperContentPopup>
      )}
      <WrapperContentPopup onClick={() => handleClickNavigate(`my-order`)}>Đơn hàng của tôi</WrapperContentPopup>
      <WrapperContentPopup onClick={() => handleClickNavigate()}>Đăng xuất</WrapperContentPopup>
    </div>
  );

  const handleClickNavigate = (type) => {
    if(type === 'profile') {
      navigate('/profile-user')
    }else if(type === 'admin') {
      navigate('/system/admin')
    }else if(type === 'my-order') {
      navigate('/my-order',{ state : {
          id: user?.id,
          token : user?.access_token
        }
      })
    }else {
      handleLogout()
    }
    setIsOpenPopup(false)
  }

  const onSearch = (e) => {
    setSearch(e.target.value)
    dispatch(searchProduct(e.target.value))
  }
//type product
  const [typeProducts, setTypeProducts] = useState([])
  
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      if(res?.data?.length > 3){
        res.data = res?.data.filter((item, index, arr) => {
          return arr.indexOf(item) <= 3;
        });
      }
      setTypeProducts(res?.data)
      
    }
  }
  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
  return (
    
    <div style={{  heiht: '100%', width: '100%', display: 'flex',background: '#fff', justifyContent: 'center'}}>
      <WrapperHeader style={{ justifyContent: isHiddenSearch && isHiddenSearch ? 'space-between' : 'unset' }}>

        <Col span={7}>
        <WrapperTextHeaderLink>
        {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTextHeaderLink>
        </Col>

        <Col span={7} style={{justifyContent:'center'}} >
          <Link to='/'>
          <img style={{width: '196px',height: '37px'}} src={logohome} alt="" />
          </Link>
        </Col>
        {!isHiddenSearch && (
          <Col span={6}>
            <ButttonInputSearch
              size="large"
              bordered={true}
              placeholder="input search text"
              onChange={onSearch}
              backgroundColorButton="#223D55"
            />
          </Col>
        )}
        <Col span={5} style={{ display: 'flex', gap: '54px', alignItems: 'center' }}>
          <Loading isLoading={loading}>
            <WrapperHeaderAccout>
              {userAvatar ? (
                <img src={userAvatar} alt="avatar" style={{
                  height: '30px',
                  width: '30px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
              ) : (
                <UserOutlined style={{ fontSize: '30px', color: 'black' }} />
              )}
              {user?.access_token ? (
                <>
                  <Popover content={content} trigger="click" open={isOpenPopup}>
                    <div style={{ cursor: 'pointer',maxWidth: 100, overflow: 'hidden', textOverflow: 'ellipsis', color: 'black', fontWeight: 'bold'}} onClick={() => setIsOpenPopup((prev) => !prev)}>{userName?.length ? userName : user?.email}</div>
                  </Popover>
                </>
              ) : (
                <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
                  <WrapperTextHeaderSmall>Sign In/Sign Up</WrapperTextHeaderSmall>
                  <div>
                    <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                    <CaretDownOutlined />
                  </div>
                </div>
              )}
            </WrapperHeaderAccout>
          </Loading>
          {!isHiddenCart && (
            <div onClick={() => navigate('/order')} style={{cursor: 'pointer'}}>
              <Badge count={cartItemCount} size="small">
                <ShoppingCartOutlined style={{ fontSize: '30px', color: 'black' }} />
              </Badge>
              <WrapperTextHeaderSmall>CART</WrapperTextHeaderSmall>
            </div>
          )}
        </Col>
      </WrapperHeader>
    </div>
  )
}

export default HeaderComponent