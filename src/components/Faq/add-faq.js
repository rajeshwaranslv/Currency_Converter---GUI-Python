import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_FAQ } from '../actions/faq';
import { AC_ADD_FAQ } from '../actions/faq';

class addFaqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      answerError: false,
      answerCountError: false,
      question: '',
      questionError: false,
      questionCountError: false,
      status: '',
      statusError: false,
    }
    this.validation = this.validation.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);


    // this.inputChange=this.inputChange.bind(this);

  }

  validation() {
    const question = this.state.question;
    const answer = this.state.answer;
    const status = this.state.status
    if (question) {
      if (question.length < 5) {
        this.setState({ questionError: false, questionCountError: true })
      }
      else {
        this.setState({ questionError: false, questionCountError: false })
      }
    }
    else {
      this.setState({ questionError: true, questionCountError: false })
    }

    if (answer) {
      if (answer.length < 5) {
        this.setState({ answerError: false, answerCountError: true })
      }
      else {
        this.setState({ answerError: false, answerCountError: false })
      }
    }
    else {
      this.setState({ answerError: true, answerCountError: false })
    }

    if (status) {
      this.setState({ statusError: false })
    }
    else {
      this.setState({ statusError: true })
    }

    const userData = {
      question: this.state.question,
      answer: this.state.answer,
      status: this.state.status
    }
    this.props.AC_ADD_FAQ(userData);
    console.log('========Add Faq========', userData)

  }
  handleInputChange(event) {
    const questionid = event.target.id;
    const questionvalue = event.target.value;
    const answerid = event.target.id;
    const answervalue = event.target.value;
    const statusid = event.target.id;
    const statusvalue = event.target.value;

    if (questionid == "question") {
      this.setState({ question: questionvalue })
      if (questionvalue) {
        if (questionvalue.length < 5) {
          this.setState({ questionError: false, questionCountError: true })
        }
        else {
          this.setState({ questionError: false, questionCountError: false })
        }
      }
      else {
        this.setState({ questionError: true, questionCountError: false })
      }
    }

    if (answerid == "answer") {
      this.setState({ answer: answervalue })
      if (answervalue) {
        if (answervalue.length < 5) {
          this.setState({ answerError: false, answerCountError: true })
        }
        else {
          this.setState({ answerError: false, answerCountError: false })
        }
      }
      else {
        this.setState({ answerError: true, answerCountError: false })
      }
    }

    if (statusid == "status") {
      this.setState({ status: statusvalue })
      if (statusvalue) {
        this.setState({ statusError: false })
      }
      else {
        this.setState({ statusError: true })
      }
    }
  }


  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Add FAQ Page</h4>
                <form class="forms-sample">
                  <div class="form-group">
                    <label for="exampleInputUsername1">QUESTION</label>
                    <input type="text" placeholder="Question" id="question" value={this.state.question} onChange={this.handleInputChange} style={{ borderColor: this.state.color0 }} class="form-control" ></input>
                    {this.state.questionError ? <label class="mt-2" style={{ color: 'red' }}>Question is required</label> : ""}
                    {this.state.questionCountError ? <label class="mt-2" style={{ color: 'red' }}>Question should be atleast 5 characters</label> : ""}

                  </div>
                  <div class="form-group">
                    <label for="exampleInputUsername1">ANSWER</label>
                    <input type="text" placeholder="Answer" id="answer" value={this.state.answer} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} class="form-control" ></input>
                    {this.state.answerError ? <label class="mt-2" style={{ color: 'red' }}>Answer is required</label> : ""}
                    {this.state.answerCountError ? <label class="mt-2" style={{ color: 'red' }}>Answer should be atleast 5 characters</label> : ""}

                  </div>
                  <div class="form-group">
                    <label for="exampleInputUsername1">STATUS</label>
                    <select class="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} >
                      <option value="Status">Status</option>
                      <option value="true">Active</option>
                      <option value="false">Inactive</option>
                    </select>
                    {this.state.statusError ? <label class="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                  </div>
                  <button type="button" class="btn btn-gradient-primary me-2" style={{
                    backgroundColor: 'blue',
                    color: 'white' ,borderRadius:'2rem'
                  }} onClick={this.validation}>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('map state', state);
  return {
    faqsReducer: state.FAQ_Reducer
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AC_LIST_FAQ, AC_ADD_FAQ }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(addFaqs);
