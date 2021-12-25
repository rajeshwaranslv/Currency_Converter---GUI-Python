import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_FAQ, AC_FAQ_ADD_FORM } from '../actions/faq';
import './list.css'
class listFaqs extends React.Component {

    componentDidMount() {
        this.props.AC_LIST_FAQ();

    }

    render() {
        var Faq = this.props.faqsReducer.faqList;
        var resultArray = [];
        if (Faq) {
            for (var i = 0; i < Faq.length; i++) {
                resultArray.push(<tr key={i} >
                    <th scope="row">{i + 1}</th>
                    <td >{Faq[i].question}</td>
                    <td>{Faq[i].answer}</td>
                    <td>{Faq[i].status}</td>
                    <td> <button value={i} onClick={this.changeInput} class="btn btn-success"style={{borderRadius:'2rem'}} id="change">Edit</button>
                        <button value={i} onClick={this.changeInput} class="btn btn-danger" style={{marginLeft:'2rem',borderRadius:'2rem'}} id="change">Delete</button></td>


                </tr>)

            }
        }


        return (
            <>
                <div class="table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col"> Questions</th>
                                <th scope="col">Answers</th>
                                <th scope="col"></th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {resultArray}
                        </tbody>
                    </table>
                </div>
            </>

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
    return bindActionCreators({ AC_LIST_FAQ }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(listFaqs);