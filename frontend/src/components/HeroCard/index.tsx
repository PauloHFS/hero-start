import './styles.css';

export const HeroCard = ({ name, imgSrc }) => {
  return (
    <div className="hero-card">
      <img src={imgSrc} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};
