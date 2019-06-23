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
      questions: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/questions')
      .then(res => res.json())
      .then(questions => this.setState({ questions }));
  }

  renderQuestions() {
    return this.state.questions.map(question => {
      return (
        <div className="question">
          <div className="question-stats">
            <div className="ui mini statistics vertical-center">
              <div className="statistic">
                <div className="value">22</div>
                <div className="label">Votes</div>
              </div>
              <div className="statistic">
                <div className="value">31</div>
                <div className="label">Answers</div>
              </div>
              <div className="statistic">
                <div className="value">22</div>
                <div className="label">Views</div>
              </div>
            </div>
          </div>
          <div className="question-info">
            <div className="row">
              <a href="#" className="question-title">
                {question.title}
              </a>
            </div>
            <div className="question-meta">
              <div className="question-tags">
                {question.tags.map(tag => (
                  <a className="ui mini tag label">{tag}</a>
                ))}
              </div>
              <div className="question-modified">
                <span>asked by {question.latestModification.user}</span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="common-questions">
        <header className="br-bt ui grid">
          <div className="row">
            <div className="left floated six wide column">
              <h1>{this.props.title}</h1>
            </div>
            <div className="right floated six wide column">
              <button className="ui right floated blue button">Ask Question</button>
            </div>
          </div>
          <div className="row">
            <div className="left floated six wide column question-count">
              {this.state.questions.length} questions
            </div>
            <div className="right floated six wide column">
              <div className="ui right floated buttons">
                <button className="ui button active">One</button>
                <button className="ui button">Two</button>
                <button className="ui button">Three</button>
              </div>
            </div>
          </div>
        </header>
        {this.renderQuestions()}
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
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Questions);
