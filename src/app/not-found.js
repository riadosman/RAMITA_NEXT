import Link from "next/link";
export default function notFound() {
  return (
    <div className=" text-center">
      <h1 className="text-6xl my-40">
        هذه الصفحه غير موجوده يرجه التحقق من الرابط او زياره الموقع الرسمي
        للشركة
      </h1>
      <Link href="http://ramitamedia.com/">www.ramitamedia.com</Link>
    </div>
  );
}
