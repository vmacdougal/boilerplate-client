import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Row} from 'react-bootstrap';

import {selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit, findMapLocation, enterAddress, setCoordinates} from 'actions';
import TextInput from 'TextInput.jsx';
import ImmutableTextInput from 'ImmutableTextInput.jsx';
import Picker from 'Picker.jsx';
import Posts from 'Posts.jsx';
import SubmitButton from 'SubmitButton.jsx';

class AsyncMapApp extends Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
	this.handleRefreshClick = this.handleRefreshClick.bind(this);
	this.handleTextInput = this.handleTextInput.bind(this);
	this.retrieveCoordinates = this.retrieveCoordinates.bind(this);
  };

  componentDidMount() {
    const {dispatch, selectedSubreddit} = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const {dispatch, selectedSubreddit} = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
      else if (nextProps.address !== this.props.address) {
	  const {address} = nextProps;
	  var dispatch = nextProps.dispatch;
	  dispatch(enterAddress(address));
      };
  };

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  };

    handleTextInput(address) {
	this.props.dispatch(enterAddress(address));
    };

    retrieveCoordinates(address) {
	console.log("retrieving coordinates");
	this.props.dispatch(setCoordinates(this.props.address));
    };

  handleRefreshClick(e) {
    e.preventDefault();
    const {dispatch, selectedSubreddit} = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
      const {selectedSubreddit, posts, isFetching, lastUpdated, address, coordinates} = this.props;
    return (
	    <div>
	    <div>
	    <TextInput value={address} onChange={this.handleTextInput} />
	    </div>
	    <div>
	    <SubmitButton onClick={this.retrieveCoordinates} />
	    </div>
	    <div class-name='row'>
	    <ImmutableTextInput value={coordinates[0]} onChange={this.handleTextInput}/>
	    <ImmutableTextInput value={coordinates[1]} onChange={this.handleTextInput}/>
	    </div>
	    
<Picker value={selectedSubreddit} onChange={this.handleChange} options={['reactjs', 'frontend']} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a href='#' onClick={this.handleRefreshClick}>
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}

AsyncMapApp.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
    streetAddress: PropTypes.string,
    coordinates: PropTypes.array
};

function mapStateToProps(state) {
    console.log("Mapping state");
    const {selectedSubreddit, postsBySubreddit, address, coordinates} = state;
  const {
    isFetching,
    lastUpdated,
      items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
      lastUpdated,
      address,
      coordinates
  };
}

export default connect(mapStateToProps)(AsyncMapApp);
