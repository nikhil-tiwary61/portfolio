import { Link } from "react-scroll";

export default function Home() {
  return (
    <>
      <section id="intro">
        <div className="intro-content">
          <span className="hello">Hello,</span>
          <span className="intro-text">
            I&apos;m <span className="intro-name">Nikhil</span>
            <br />
            Web Developer
          </span>
          <p className="intro-para">
            I am a skilled web developer with expertise in React JS and interest
            in Front End Development.
          </p>
          <Link>
            <button className="btn">Hire me</button>
          </Link>
        </div>
        <img src="" alt="" />
      </section>
    </>
  );
}
