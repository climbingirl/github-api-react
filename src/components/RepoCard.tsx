import { IRepo } from '../models/models';

const RepoCard = ({ repo }: { repo: IRepo }) => {
  return (
    <div className="border rounded hover:bg-gray-100 transition mb-2 hover:shadow-md py-3 px-5">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks_count}</span>
          Watchers: <span className="font-bold">{repo.watchers_count}</span>
        </p>
        <p className="text-sm font-thin text-nowrap text-ellipsis overflow-hidden">
          {repo?.description}
        </p>
      </a>
    </div>
  );
};

export default RepoCard;
