export function SiteFooter({ labels }) {
  return (
    <footer className="site-footer">
      <div>
        <span className="site-brand-mark" aria-hidden="true">
          DAF
        </span>
        <p>{labels.footerText}</p>
      </div>
      <a href="#top">
        {labels.backToTop}
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  );
}
