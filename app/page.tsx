import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>aperture</h1>
      </div>
      <div className="subheader">
        <p>The only hub for .huh, fenrir and many more projects! a product of yigit.</p>
      </div>
      <nav>
        <Link href="https://github.com/yigitkabak" className="nav-link">github</Link>
      </nav>
      <footer>
        <p>a yigit production.</p>
      </footer>
    </div>
  );
}
