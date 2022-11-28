import { useHeros } from '../../querys/hero/useHeros';

export const Root = () => {
  const { data, isError, isLoading } = useHeros();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  return (
    <div>
      <div>
        {data.map(hero => (
          <div key={hero.id}>
            <img
              src={`${import.meta.env.VITE_HERO_API_BASE_URL}/${hero.picture}`}
              alt=""
            />
            <h3>{hero.name}</h3>
          </div>
        ))}
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
