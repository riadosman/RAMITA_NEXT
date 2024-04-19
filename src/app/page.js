import React from "react";
import Main from "../components/Main/Main";
import MethodsCard from "../components/MethodsCard/MethodsCard";
import Titlecom from "../components/TItle/Titlecom";
import Oursevices from "../components/Ourservices/Oursevices";
import Footer from "../components/footer/Footer";
import Link from "next/link";
import "./globals.css";
import {
  FaPeopleGroup,
  FaMapLocationDot,
  FaMagnifyingGlass,
  FaChartPie,
} from "react-icons/fa6";

const Home = () => {
  const data = [
    {
      title: "تحليل الجمهور",
      description: "تحديد جمهورك المستهدف وتجزئته واكتشاف تفضيلات المستهلك",
      img: <FaPeopleGroup />,
    },
    {
      title: "تحديد المنافسين",
      description:
        "دراسة المنافسين ونقاط قوتهم وضعفهم والتهديدات التي قد تواجهها",
      img: <FaMapLocationDot />,
    },
    {
      title: "اختبار الإعلان",
      description: "مقارنة نسختين مختلفتين من الإعلان لتحديد أيهما أكثر فعالية",
      img: <FaMagnifyingGlass />,
    },
    {
      title: "قياس نتائج الحملة",
      description:
        "تحليل بيانات الحملة يساعدك في اتخاذ قرارات بشأن حملتك المستقبلية",
      img: <FaChartPie />,
    },
  ];
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
        {data.map((e, i) => {
          return (
            <Link href={`/Servise/${i + 1}`} key={i}>
              <MethodsCard
                title={e.title}
                description={e.description}
                img={e.img}
              />
            </Link>
          );
        })}
      </div>

      <Titlecom text="خدماتنا" />
      <Oursevices />
    </div>
  );
};

export default Home;
