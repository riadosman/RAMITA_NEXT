import React from "react";
import OursevicesCard from "../OursevicesCard";
import "./oursevices.css";
import Link from "next/link";
import { ourServicesData as data } from "../../data/data";

// خدماتنا كل الكروت
const Oursevices = () => {
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
