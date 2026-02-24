export function LinkCard({ title, href, icon, iconAlt, gradient }) {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">
      <article className="link-card" style={{ '--card-gradient': gradient }}>
        <img src={icon} alt={iconAlt} width="28" height="28" />
        <h3>{title}</h3>
      </article>
    </a>
  );
}
