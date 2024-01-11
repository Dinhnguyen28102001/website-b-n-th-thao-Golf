import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./style.css";
import "slick-carousel/slick/slick-theme.css";
const NewsGolf = () => {
  const [activeItemId, setActiveItemId] = useState(null);
  const [activeItemLink, setActiveItemLink] = useState(null);
  const handleItemClick = (item) => {
    setActiveItemId(item.id);
    setActiveItemLink(item.link);
  };
  const items = [
    {
      id: 1,
      title: "RORY MCILROY ĐẢM BẢO CUỘC ĐUA THỨ NĂM ĐẾN DANH HIỆU DUBAI",
      desk: "Rory McIlroy đã giành được danh hiệu Race to Dubai lần thứ năm trước khi sự kiện cuối cùng diễn ra tại Earth Course ở Jumeirah Golf Estates. Mùa giải đặc biệt của người Bắc Ireland, nổi bật bằng hai chiến thắng tại Rolex Series, đã củng cố vị trí của anh ấy ở vị trí dẫn đầu. Sau cuộc thi Nedbank Golf Challenge ở Nam Phi vào tuần trước, anh ấy đã giành được đủ số điểm để khiến bất kỳ đối thủ nào tại DP World Tour Championship không thể bắt kịp về mặt toán học.",
      image:
        "https://assets.tmcontent.com/i/59/616873/654039~W1500_H844_Mcrop_P50-50.jpg",
      link: "77YY0Af18yw",
    },
    {
      id: 2,
      title: "Kathryn Newton đánh par 5 với Brooke Henderson",
      desk: " Đội TaylorMades Brooke Henderson xếp ngang hàng với Kathryn Newton. Từ cú phát bóng đến cú putt cuối cùng, Kathryn và Brooke nói về chiến lược, kỹ thuật và cuộc sống của một vận động viên chơi gôn và diễn viên. Brooke chia sẻ một số lời khuyên tuyệt vời về cách cô ấy xử lý một cú đánh có áp lực cao, trở nên hung hãn khi cần và hơn thế nữa. Họ phát bóng với Stealth 2 Driver, tiếp cận với Stealth 2 Fairway, Rescue và MG4 Wedge. Và họ kết thúc nó bằng một con Nhện.",
      image:
        "https://assets.tmcontent.com/i/2a/616861/PH_2~W1280_H720_Mcrop_Fjpg_P50-50.jpg",
      link: "mmtj5DurYBU",
    },
    {
      id: 3,
      title: "Thử Thách TƯỜNG FLOP Cùng Wrexham A.F.C.",
      desk: "Wrexham A.F.C. đã dành thời gian để đến Vương quốc ở Carlsbad và chọn một số gậy Wedges TaylorMade Golf MG4 mới và tham gia vào thử thách vượt tường. Các ngôi sao của chương trình HULU đình đám Welcome To Wrexham đã thử thách kỹ năng của họ và trận chiến này đã đi đến hồi kết.",
      image:
        "https://assets.tmcontent.com/i/58/616331/final~W1280_H720_Mcrop_Fjpg_P50-50.jpg",
      link: "pq-L5SqXn24",
    },
    {
      id: 4,
      title: "Max Verstappen và Checo Perez đấu với Michael Block",
      desk: "Những con quỷ tốc độ của Oracle Red Bull Racing, Max Verstappen và Checo Perez, đổi đường đua lấy sân gôn ở Qatar. Trong trận đối đầu trên fairway có tỷ lệ cược cao này, bộ đôi này sẽ thể hiện kỹ năng của mình trước tay golf chuyên nghiệp dày dặn kinh nghiệm của TaylorMade, Michael Block. Hãy thắt dây an toàn khi Checo bộc lộ tài năng chơi gôn đáng kinh ngạc của mình trong khi Max điều khiển chiếc xe chơi gôn với độ chính xác F1.",
      image:
        "https://assets.tmcontent.com/i/53/615926/Screen-Shot-2023-10-31-at-12.24.36-PM~W1280_H720_Mcrop_Fjpg_P50-50.jpg",
      link: "0f9WbZXDdtc",
    },
    {
      id: 5,
      title: "Morikawa Tỏa sáng tại Giải vô địch ZOZO",
      desk: "Collin giành được chiến thắng PGA TOUR thứ sáu trong sự nghiệp tại Xứ sở mặt trời mọc, được hỗ trợ bởi gậy sắt P·7MC, Milled Grind 4 Wedges và TP5x Golf Ball.",
      image:
        "https://assets.tmcontent.com/i/9f/612766/GettyImages-1749388205~W1500_H844_Mcrop_P50-50.jpeg",
      link: "hcQ87ePjs0U",
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
      <p className="title_news">TIN MỚI NHẤT</p>
      <Slider {...settings}>
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => handleItemClick(item)}
            className="box_nav"
          >
            <div className="image_box">
              <img className="image_item" src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desk}</p>
          </div>
        ))}
      </Slider>
      <div className={`box_iframe ${activeItemId ? "show" : "visible"}`}>
        <iframe
          className="fame"
          src={`https://www.youtube.com/embed/${activeItemLink}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default NewsGolf;
