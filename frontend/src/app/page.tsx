import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1>Software Practice Empirical Evidence Database (SPEED)</h1>
      <br />
      <ul className="header">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/SEPractice">Select the Practice</Link>
        </li>
        <li>
          <Link href="/SubmitArticle">Submit a Article</Link>
        </li>
      </ul>
      <div className="content"></div>
    </div>
  );
}
