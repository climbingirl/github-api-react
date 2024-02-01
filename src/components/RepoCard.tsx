import { useAppSelector } from '../hooks/redux';
import { useActions } from '../hooks/useActions';
import { IRepo } from '../models/models';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const favourites = useAppSelector((state) => state.github.favourites);
  const { addFavourite, removeFavourite } = useActions();
  const isFavourite = favourites.includes(repo.html_url);

  const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addFavourite(repo.html_url);
  };

  const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeFavourite(repo.html_url);
  };

  return (
    <div className="border rounded hover:bg-gray-100 transition mb-2 hover:shadow-md py-3 px-5">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks_count}</span>
          Watchers: <span className="font-bold">{repo.watchers_count}</span>
        </p>
        <p className="text-sm font-thin text-nowrap text-ellipsis overflow-hidden mb-1">
          {repo?.description}
        </p>

        {!isFavourite && (
          <button
            onClick={addToFavourite}
            className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition"
          >
            Add
          </button>
        )}
        {isFavourite && (
          <button
            onClick={removeFromFavourite}
            className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition"
          >
            Remove
          </button>
        )}
      </a>
    </div>
  );
};

export default RepoCard;
