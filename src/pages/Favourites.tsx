import { useAppSelector } from '../hooks/redux';

const Favourites = () => {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0) {
    return <p className="text-center pt-10">No favourites added.</p>;
  }

  return (
    <div className="container pt-10">
      <ul>
        {favourites.map((favourite) => (
          <li
            key={favourite}
            className="text-center mb-2 hover:text-blue-800 transition"
          >
            <a href={favourite} target="_blank">
              {favourite}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
