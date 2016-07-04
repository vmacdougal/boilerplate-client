import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const ENTER_ADDRESS = 'ENTER_ADDRESS';
export const REQUEST_COORDINATES = 'REQUEST_COORDINATES';
export const SET_COORDINATES = 'SET_COORDINATES';

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};

export function enterAddress(address) {
    return {
	type: ENTER_ADDRESS,
	address
    };
}

function requestCoordinates(address) {
    return {
	type: REQUEST_COORDINATES,
	address
    };
}

function setCoordinates(lat, lon) {
    var coordinates = [lat, lon];
    return {
	type: SET_COORDINATES,
	coordinates
    };
}
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
};

function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  };
};

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

export function setCoordinates(address) {
    var formattedAddress = address.replace(/ /g,'+');
    return dispatch => {
	dispatch(requestCoordinates(address));
    return fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + formattedAddress + ',+Austin,+TX&key=AIzaSyBwG8daotYRfsMPi4m1Wk-12uXUeaKEJ_k')
	    .then(response => response.json())
	.then(function(json) {
	    var latitude = json.results[0].geometry.location.lat;
	    var longitude = json.results[0].geometry.location.lng;
	    requestCoordinates(latitude, longitude);
	});
    };
}

function fetchPosts(subreddit) {
  return dispatch => {
    dispatch(requestPosts(subreddit));
    return fetch(`http://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
};

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  }
  else if (posts.isFetching) {
    return false;
  }
  else {
    return posts.didInvalidate;
  }
};

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  };
};

function findMapLocation(address) {
    address = address.replace(/ /g,'+');
    var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + ',+Austin,+TX&key=AIzaSyBwG8daotYRfsMPi4m1Wk-12uXUeaKEJ_k';
    var request = new Request(url,
			      {method: 'GET',
			       mode: 'cors'
			      });
    fetch(request)
	.then(function(response) {
	    return response.json();
	})
	.then(function(json) {
	    var latitude = json.results[0].geometry.location.lat;
	    var longitude = json.results[0].geometry.location.lng;
	    requestCoordinates(latitude, longitude);
	});
}

