import React from "react";
import "./packets.css";
const Packets = () => {
  const messages = [
    "السلام عليكم اريد البدء بلخطه الاساسيه",
    "السلام عليكم اريد البدء بلخطه الأعمال",
    "السلام عليكم اريد البدء بلخطه المتقدمة",
  ];
  return (
    <div className="packets-container container" dir="rtl">
      <div class="bouquet">
        <div class="sticker">مجانا</div>
        <p className="title">الباقةالأساسية مجانية 15/يوم</p>
        <li class="item">دراسة السوق</li>
        <li class="item">محتوى إعلاني عدد 2</li>
        <li class="item">تصميم عدد 2</li>
        <li class="item">دراسة المنافسين</li>
        <li class="item">ربط جميع مواقع وسـائل التواصل الاجتماعي</li>
        <li class="item">بناء الرد الترحيبي الآلي في الحسابات</li>
        <li class="item">ضبـط الملف التعريفي لكل المنصات</li>
        <li class="item">تصميم استطلاع أبحاث السوق</li>
        <a
          href={`https://wa.me/+905347075309/?text=${messages[0]}`}
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          ابدء الان
        </a>
      </div>

      <div class="bouquet">
        <p className="title">باقة الأعمال / 175$ شهر</p>
        <li class="item">عدد 2 منصات</li>
        <li class="item">اطلاق حملة إعلانية ممولة على ميتا</li>
        <li class="item">دراسة السوق</li>
        <li class="item">محتوى إعلاني عدد 12</li>
        <li class="item">تصميم عدد 12</li>
        <li class="item">دراسة المنافسين</li>
        <li class="item">ربط جميع مواقع وسـائل التواصل الاجتماعي</li>
        <li class="item">بناء الرد الترحيبي الآلي في الحسابات</li>
        <li class="item">ضبـط الملف التعريفي لكل المنصات</li>
        <li class="item">تصميم استطلاع أبحاث السوق</li>
        <li class="item">تخطيط لحدث</li>
        <li class="item">إدارة موقع الشركة على خرائط غوغل</li>
        <li class="item">إعداد خطة التخطيط للأيام العالمية خلال الشهر</li>
        <li class="item">تقديم أفكار احترافية للتسـويق</li>
        <li class="item">تقرير شهري</li>
        <a
          href={`https://wa.me/+905347075309/?text=${messages[2]}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary w-100 p-2"
        >
          ابدء الان
        </a>
      </div>
      <div class="bouquet">
        <p className="title">الباقة المتقدمة / 225$ شهر</p>
        <li class="item">عدد 3 منصات</li>
        <li class="item">اطلاق حملة إعلانية ممولة على ميتا</li>
        <li class="item">دراسة السوق</li>
        <li class="item">محتوى إعلاني عدد 16</li>
        <li class="item">تصميم عدد 16</li>
        <li class="item">دراسة المنافسين</li>
        <li class="item">ربط جميع مواقع وسـائل التواصل الاجتماعي</li>
        <li class="item">بناء الرد الترحيبي الآلي في الحسابات</li>
        <li class="item">ضبـط الملف التعريفي لكل المنصات</li>
        <li class="item">تصميم استطلاع أبحاث السوق</li>
        <li class="item">تخطيط لحدث</li>
        <li class="item">إدارة موقع الشركة على خرائط غوغل</li>
        <li class="item">إعداد خطة التخطيط للأيام العالمية خلال الشهر</li>
        <li class="item">تقديم أفكار احترافية للتسـويق</li>
        <li class="item">تقرير شهري</li>
        <li class="item">تصميم وإجراء استطلاعات أبحاث السوق لاختبار المنتج</li>
        <li class="item">تحسين محركات البحث</li>
        <li class="item">تطوير الموقع الإلكتروني</li>
        <li class="item">إعداد وإطلاق حملة إعلانية على جوجل</li>
        <li class="item">تصميـم فيديو موجرافيك 30 ثانية</li>
        <a
          href={`https://wa.me/+905347075309/?text=${messages[1]}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary w-100 p-2"
        >
          ابدء الان
        </a>
      </div>
    </div>
  );
};

export default Packets;
