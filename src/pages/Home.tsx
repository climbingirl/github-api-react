import { useEffect, useState } from 'react';
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from '../store/github.api';
import useDebounce from '../hooks/useDebounce';
import { IRepo } from '../models/models';
import RepoCard from '../components/RepoCard';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const {
    isLoading: areUsersLoading,
    isError: isSearchUserError,
    data: users,
  } = useSearchUsersQuery(debouncedSearchValue, {
    skip: debouncedSearchValue.length < 2,
    refetchOnFocus: true,
  });
  const [
    fetchRepos,
    { isLoading: areReposLoading, isError: isFetchReposError, data: repos },
  ] = useLazyGetUserReposQuery();

  useEffect(() => {
    setIsDropdownOpen(debouncedSearchValue.length > 1);
  }, [debouncedSearchValue]);

  const handleChoose = (userName: string) => {
    setIsDropdownOpen(false);
    fetchRepos(userName);
  };

  return (
    <div className="flex justify-center pt-10 pb-4">
      <div className="relative w-[560px]">
        <input
          className="border w-full px-4 py-2 h-[42px] mb-2"
          type="text"
          placeholder="Search for Github username..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          list="users"
        />
        {isDropdownOpen && (
          <ul className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md overflow-y-scroll bg-white">
            {areUsersLoading && <li className="text-center">Loading...</li>}

            {users?.map((user) => (
              <li
                key={user.id}
                onClick={() => handleChoose(user.login)}
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                {user.login}
              </li>
            ))}
          </ul>
        )}

        <div>
          {(isSearchUserError || isFetchReposError) && (
            <p className="text-center text-red-600">Something went wrong...</p>
          )}
          {areReposLoading && (
            <p className="text-center">Repos are loading...</p>
          )}

          {repos?.map((repo: IRepo) => <RepoCard repo={repo} key={repo.id} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
