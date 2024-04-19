import "./Main.css";
import Link from "next/link";
import Image from 'next/image';

const Main = (props) => {
  return (
    <main className="container">
      <div className="main-img">
        <Image src={props.img} alt={props.title} width={400} height={400}/>
      </div>
      <div className="content">
        <p>{props.title}</p>
        <p>{props.description}</p>
        {props.arr && (
          <ul className="arr-list">
            {props.arr.map((e) => {
              return <li key={e}>{e}</li>;
            })}
          </ul>
        )}
        {props.button && (
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow" />
            </span>
            <Link href="/Contact" className="button-text">
              ابدء الان
            </Link>
          </button>
        )}
      </div>
    </main>
  );
};

export default Main;
