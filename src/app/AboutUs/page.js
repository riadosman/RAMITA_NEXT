"use client";
import img from "/public/images/about-us.jpg";
import Main from "@/components/Main/Main";
import MethodsCard from "@/components/MethodsCard/MethodsCard";
import Titlecom from "@/components/TItle/Titlecom";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { aboutData as data } from "../../data/data";
import {
  FaPeopleGroup,
  FaMapLocationDot,
  FaMagnifyingGlass,
  FaChartPie,
} from "react-icons/fa6";
export default function AboutUs() {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [contact, setContact] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (link && contact && issue) {
      const text = `الرابط: ${link} طريقه التواصل: ${contact} المشكله: ${issue}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/+905347075309?text=${encodedText}`;
      router.push(whatsappUrl);
    } else {
      setMessage("الرجاء تعبئه جميع الحقول");
    }
  };
  return (
    <div>
      <Main
        title="من نحن"
        description="نحن نسير لأننا نرى العقبات كفرص, لأننا لا نخاف من الأشياء الجديدة وغير المعروفة, لأننا نفتح آفاقًا جديدة من خلال تمكين الأشخاص من القيام بأشياء لا يمكنهم القيام بها.
راميتا هي شركة متخصصة في مجال التسويق الالكتروني وأبحاث السوق تأسست عام 2023
في مدينة غازي عنتاب التركية
نقوم بتقديم الدعم والمساعدة للشركات التي تسعى لتنمية علامتها التجارية والقيام بأشياء لم يكن من الممكن ان يتخيلوها "
        img={img}
        arr={[]}
        button={false}
      />
      <Titlecom text="قيمنا" />
      <div className="flex items-center justify-around my-20 cursor-none">
        {data.map((e, i) => (
          <div key={i}>
            <MethodsCard
              title={e.title}
              description={e.description}
              img={e.img}
            />
          </div>
        ))}
      </div>
      <Titlecom text="عروضنا" />
      <div className="flex items-center justify-around">
        <Image src="/images/offer.jpeg" alt="offer" width={400} height={400} />
        <div className="flex items-center flex-col border-2 border-gray-200 rounded-2xl py-6 px-10">
          <input
            placeholder="رابط الموقع"
            onChange={(e) => {
              setLink(e.target.value);
            }}
            className="bg-[#19b7bd] outline-none border-2 border-none rounded-2xl py-4 px-6 m-2 w-full placeholder-white text-right text-white"
          />
          <input
            placeholder="طريقه التواصل"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            className="bg-[#19b7bd] outline-none border-2 border-none rounded-2xl py-4 px-6 m-2 w-full placeholder-white text-right text-white"
          />
          <textarea
            placeholder="المشكلة"
            onChange={(e) => {
              setIssue(e.target.value);
            }}
            className="bg-[#19b7bd] outline-none border-2 border-none rounded-2xl py-4 px-6 m-2 w-full placeholder-white text-right text-white"
          />
          <p>سوف يتم التواصل معكم لاخذ التفاصيل اللازمه للبدء</p>
          {message && <p className="my-2 text-red-500">{message}</p>}
          <button
            type="submit"
            className="bg-[#19b7bd] py-4 px-6 rounded-2xl"
            onClick={handleSubmit}
          >
            أرسال
          </button>
        </div>
      </div>
    </div>
  );
}
