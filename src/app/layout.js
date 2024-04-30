import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ramita Media",
  description:
    "منصة رائدة  في مجال التسويق الالكتروني وأبحاث السوق توفر لك كل ما تحتاجه لتنمية علامتك التجارية وزيادة مبيعاتك مع فريق من الخبراء",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head></head>
      <body className={cairo.className}>
        <Header />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
