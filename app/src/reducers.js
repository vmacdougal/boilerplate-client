import {combineReducers} from 'redux';
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, ENTER_ADDRESS, SET_COORDINATES} from 'actions';

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit;
  default:
    return state;
  };
};

function address(state = '', action) {
    switch(action.type) {
    case ENTER_ADDRESS:
	return action.address;
    default:
	return state;
    };
};

function coordinates(state = [30, -97], action) {
    switch(action.type) {
    case SET_COORDINATES:
	return action.coordinates;
    default:
	return state;
    };
}

function posts(state = {isFetching: false, didInvalidate: false, items: []}, action) {
  let hash = {};
  switch (action.type) {
  case INVALIDATE_SUBREDDIT:
    hash = {
      didInvalidate: true
    };
    return Object.assign({}, state, hash);

  case REQUEST_POSTS:
    hash = {
      isFetching: true,
      didInvalidate: false
    };
    return Object.assign({}, state, hash);

  case RECEIVE_POSTS:
    hash = {
      isFetching: false,
      didInvalidate: false,
      items: action.posts,
      lastUpdated: action.receivedAt
    };
    return Object.assign({}, state, hash);

  default:
    return state;
  }
}

function postsBySubreddit(state = { }, action) {
  switch (action.type) {
  case INVALIDATE_SUBREDDIT:
  case RECEIVE_POSTS:
  case REQUEST_POSTS:
    let hash = {
      [action.subreddit]: posts(state[action.subreddit], action)
    };
    return Object.assign({}, state, hash);
  default:
    return state;
  };
}

const rootReducer = combineReducers({
  postsBySubreddit,
    selectedSubreddit,
    address,
    coordinates
});

export default rootReducer;
