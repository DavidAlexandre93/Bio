import { LinkCard } from './LinkCard';

export function LinksSection({ title, links }) {
  return (
    <>
      <h2 className="section-title">{title}</h2>
      <div className="links-grid" data-animate="cards">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </>
  );
}
