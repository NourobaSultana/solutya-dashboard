import React from "react";
// import profile from "../../assets/profile.png";
import icon1 from "../../assets/Fourcard/Icon/Icon Earnings.png";
import icon2 from "../../assets/Fourcard/Icon/Icon Clients.png";
import icon3 from "../../assets/Fourcard/Icon/Icon Projects.png";
import icon4 from "../../assets/Fourcard/Icon/Icon Conversion Rate.png";

import percent1 from "../../assets/Fourcard/Percentage/1.png";
import percent2 from "../../assets/Fourcard/Percentage/2.png";
import percent3 from "../../assets/Fourcard/Percentage/3.png";
import percent4 from "../../assets/Fourcard/Percentage/4.png";

const cards = [
  {
    id: 1,
    image: icon1,
    title: "Total Earnings",
    amount: "$18,432",
    percentage: percent1,
  },
  {
    id: 2,
    image: icon2,
    title: "Total Client",
    amount: "$274",
    percentage: percent2,
  },
  {
    id: 3,
    image: icon3,
    title: "Total Projects",
    amount: "$274",
    percentage: percent3,
  },
  {
    id: 4,
    image: icon4,
    title: "Conversion Rate",
    amount: "$1545",
    percentage: percent4,
  },
];

const FourCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white border min-h-[87px] border-[#E8E7EC] rounded-2xl p-3 sm:p-4 transition-all duration-300 hover:shadow-md"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Left Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
              />

              {/* Right Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] sm:text-[14px] text-[#A7A7A7] truncate">
                  {card.title}
                </h3>

                {/* Bottom */}
                <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                  <span className="text-[20px] sm:text-[24px] font-medium">
                    {card.amount}
                  </span>

                  <img
                    src={card.percentage}
                    alt="Member"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FourCard;
