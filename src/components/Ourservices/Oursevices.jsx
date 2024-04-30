import React from "react";
import OursevicesCard from "../OursevicesCard";
import "./oursevices.css";
import Link from "next/link";

// خدماتنا كل الكروت
const Oursevices = () => {
  const data = [
    ["/images/marketing.jpg", "التسويق الرقمي"],
    ["/images/fullimgs.jpg", "تصميم الهوية البصرية"],
    ["/images/webdesign.jpg", "تصميم مواقع الويب"],
  ];
  return (
    <div className="container Oursevices-cards" id="services">
      {data.map((e, i) => {
        return (
          <Link href={`/Methods/${i + 1}`} key={i}>
            <OursevicesCard costum={e} />
          </Link>
        );
      })}
      <Link href="/Contact">
        <OursevicesCard
          costum={[
            "/images/costumerservice.jpg",
            "هل تحتاج فقط إلى الأساسيات؟ ابدأ مجانًا.",
          ]}
        />
      </Link>
    </div>
  );
};

export default Oursevices;
