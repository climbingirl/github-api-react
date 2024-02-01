import { useDispatch } from 'react-redux';
import { githubActions } from '../store/github.slice';
import { bindActionCreators } from '@reduxjs/toolkit/react';

const actions = {
  ...githubActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
