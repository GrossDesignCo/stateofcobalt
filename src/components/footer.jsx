import Link from 'next/link';

export const Footer = ({ children }) => (
  <footer>
    <nav>
      {children}
      {children ? '| ' : ''}
      <Link className="link primary" href="/about">
        About
      </Link>{' '}
      |{' '}
      <Link className="link primary" href="/">
        Home
      </Link>
    </nav>
  </footer>
);
