import Link from 'antd/es/typography/Link'
import React from 'react'
import fb from '../../assets/logopng/logofb.png'
import twitter from '../../assets/logopng/twitter logo.png'
import linkedin from '../../assets/logopng/linkin logo.png'
import instagram from '../../assets/logopng/ig logo.webp'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import  './style.css'


const FooterComponent = () => {
  return (
  
    <div className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb_footer-links'>
                <div className='sb__footer-links-div'>
                    <h4>Cho doanh nghiệp</h4>
                        <p></p>
                        <p>Health plan</p>
                        <p>Individual</p>
                    </div>
                    <div className='sb__footer-links-div'>
                    <h4>Cho doanh nghiệp</h4>
                        <p></p>
                        <p>Health plan</p>
                        <p>Individual</p>
                    </div>
                    <div className='sb__footer-links-div'>
                    <h4>Tin mới nhất</h4>
                        <p>Resources center</p>
                                
                        <p>Testimonials</p>
                            
                        <p>STV</p>
                 
                    </div>
                    <div className='sb__footer-links-Image-div'>
                        <h4>Đăng ký là thành viên ngay</h4>
                        <p>Hãy là người đầu tiên biết về các sản phẩm độc quyền, các phiên bản mới nhất,<br/> tin tức về chuyến tham quan và nhiều thông tin khác</p>
                        <ButtonComponent
                                size={40}
                                styleButton={{
                                    background: '#fff',
                                    height: '76px',
                                    width: '448px',
                                    border: 'none',
                                }}
                                textbutton={'Đăng ký ngay'}
                                styleTextButton={{ color: '#000', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>
                        <div className='socialmedia'>
                            <p><img src={fb} alt="" /></p>
                            <p><img src={twitter} alt="" /></p>
                            <p><img src={linkedin} alt="" /></p>
                            <p><img src={instagram} alt="" /></p>
                        </div>
                </div>
            </div>

            <hr></hr>

            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p>
                        @{new Date().getFullYear()}TaylorMade Golf Co.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <Link href='/'><div><p>     Terms & Conditions</p></div></Link>
                    <Link href='/'><div><p>Privacy</p></div></Link>
                    <Link href='/'><div><p>Security</p></div></Link>
                    <Link href='/'><div><p>Cookie Declaration</p></div></Link>
                </div>
            </div>
        </div>
    </div>
   
    )
}

export default FooterComponent