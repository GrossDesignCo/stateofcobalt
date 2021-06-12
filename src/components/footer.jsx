export const Footer = ({ children }) => (
  <footer>
    <nav>
      {children}

      {children ? "| " : ""}
      <a class="link primary" href="/about">
        About
      </a>
    </nav>
  </footer>
);
