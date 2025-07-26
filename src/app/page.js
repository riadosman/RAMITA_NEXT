import React from "react";
import Main from "@/components/Main/Main";
import MethodsCard from "@/components/MethodsCard/MethodsCard";
import Titlecom from "@/components/TItle/Titlecom";
import Oursevices from "@/components/Ourservices/Oursevices";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import "./globals.css";
import "./media.css";
import { data } from "../data/data";

const Home = () => {
  return (
    <div className="Home">
      <Main
        title="أنشئ حملات تسويقية ناجحة ونمّ عملك عن طريق تحليل البيانات والأداء والسوق"
        description="أنشئ حملات تسويقية قوية لجذب عملاء جدد تعرف على ما يريده السوق المستهدف حتى تتمكن من تطوير خطط تسويقية أكثر فاعلية لمواكبة اتجاهات السوق والوصول إلى العملاء المحتملين وتحقيق أفضل النتائج"
        button={true}
        arr={[]}
        img={"/images/main.jpg"}
      />
      <hr className="bg-main" />
      <Titlecom text="بعض الطرق التي نستخدمها للحصول على افضل النتائج" />
      <div className="cards">
        {data.map((e, i) => (
          <Link href={`/Servise/${i + 1}`} key={i}>
            <MethodsCard
              title={e.title}
              description={e.description}
              img={e.img}
            />
          </Link>
        ))}
      </div>

      <Titlecom text="خدماتنا" />
      <Oursevices />
    </div>
  );
};

export default Home;
