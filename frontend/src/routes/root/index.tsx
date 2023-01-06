import { HeroCard } from '../../components/HeroCard';
import { useHeros } from '../../querys/hero/useHeros';
import './styles.css';

export const Root = ({ children }) => {
  const { data, isError, isLoading } = useHeros();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div className="root-page">
      <div className="heros-list">
        {data.map(hero => (
          <HeroCard
            key={hero.id}
            imgSrc={`${import.meta.env.VITE_HERO_API_BASE_URL}/${hero.picture}`}
            name={hero.name}
          />
        ))}
      </div>
    </div>
  );
};
