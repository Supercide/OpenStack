import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class Questions extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      questions: 0
    }
  }

  render() {
    return (
      <div className="common-questions ui grid br-bt">
        <div className="left floated six wide column">
          <h1>{this.props.title}</h1>
        </div>
        <div className="right floated six wide column">
          <button className="ui right floated blue button">Ask Question</button>
        </div>
        <div className="row">          
          <div className="left floated six wide column question-count">
            {this.state.questions} questions
          </div>
          <div className="right floated six wide column">
            <div class="ui right floated buttons">
              <button class="ui button active">One</button>
              <button class="ui button">Two</button>
              <button class="ui button">Three</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
