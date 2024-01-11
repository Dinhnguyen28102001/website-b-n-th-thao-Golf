import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./style.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
const GolferTaylor = () => {
  const navigate = useNavigate()
  const items = [
    {
      id: 1,
      title: "Con nhện của bạn, theo cách của bạn",
      desk: "Cá nhân hóa 10 yếu tố khác nhau bao gồm kết thúc, đường ngắm, Căn chỉnh True Path™, chèn mặt và hơn thế nữa. Thiết kế của bạn",
      image:
        "https://assets.tmcontent.com/i/03/614433/1023-ZeroRestriction-ContentBlock-1200x900~W1200_Mcrop_aspectRatio1-3333333333333_Fjpg_P50-50.jpg",
      link: "APPAREL",
    },
    {
      id: 2,
      title: "Đón mùa theo phong cách",
      desk: "Khi thời tiết se lạnh, hãy giữ ấm cho bạn và trò chơi gôn của bạn bằng các phong cách và cách phối màu mới từ TaylorMade | Không hạn chế.",
      image:
        "https://assets.tmcontent.com/i/36/614210/MySpiderTour-TourX-ContentBlock-1200x900~W1200_Mcrop_aspectRatio1-3333333333333_Fjpg_P50-50.jpg",
      link: "BAGS",
    },
    {
      id: 3,
      title: "Trình điều khiển mini BRNR đã trở lại!",
      desk: "Hiện đã có thể đặt hàng lại, Driver BRNR Mini kết hợp kiểu dáng cổ điển với Công nghệ trọng lượng di chuyển để mang đến cho người chơi sự lựa chọn về độ ổn định và tính linh hoạt hoặc tăng khoảng cách với đường bay bóng xuyên qua.",
      image:
        "https://assets.tmcontent.com/i/b5/544393/0423-BRNR-Mini-Driver-ContentBlock-1000x730~W1200_Mcrop_aspectRatio1-3333333333333_Fjpg_P50-50.jpg",
      link: "IRONS",
    },
    {
      id: 4,
      title: "Đặt một cây cung trên khoảng cách!",
      desk: "Mùa lễ này, hãy tặng cho những người thân yêu chơi gôn của bạn món quà về khoảng cách, đồng thời tận hưởng khoản tiết kiệm lớn khi mua các sản phẩm hàng đầu của chúng tôi.",
      image:
        "https://assets.tmcontent.com/i/4b/616344/MG4-P770-Black-ContentBlock~W1200_Mcrop_aspectRatio1-3333333333333_Fjpg_P50-50.jpg",
      link: "",
    },
    {
      id: 5,
      title: "Lùi lại, phát bóng!",
      desk: "Chỉ vì Giờ tiết kiệm ánh sáng ban ngày đã kết thúc, không có nghĩa là chơi gôn cũng phải như vậy. Đón chào màn đêm buông xuống với P·770 Phantom của chúng tôi",
      image:
        "https://assets.tmcontent.com/i/d3/616368/1123-Swing-Into-Savings-ContentBlock-1200x900~W1200_Mcrop_aspectRatio1-3333333333333_Fjpg_P50-50.jpg",
      link: "",
    },
    // Add more items as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container_v">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="box_nav" onClick={()=>navigate(`/product/${item.link.normalize('NFD').replace(/[\u0300-\u036f]/g, '')?.replace(/ /g, '_')}`, {state: item.link})}>
            <div className="image_box">
              <img className="image_item" src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desk}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GolferTaylor;
