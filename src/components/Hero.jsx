export function Hero({ profile }) {
  return (
    <header className="hero">
      <img className="profile" src={profile.image} alt={profile.imageAlt} width="125" height="125" />
      <h1 className="hero-title">{profile.name}</h1>
      <p className="hero-tag">{profile.tag}</p>
    </header>
  );
}
