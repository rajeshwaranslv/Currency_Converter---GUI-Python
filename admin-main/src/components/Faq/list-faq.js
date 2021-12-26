import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_FAQ, AC_DELETE_FAQ } from '../actions/faq';
import swal from 'sweetalert';
import './list.css'
class listFaqs extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(event) {
        var faqId = event.target.id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, the file will deleted permanently!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.deleteFaq(faqId);
                }
            });
    }
    deleteFaq(faqId) {
        var formData = {
            id: faqId
        }
        this.props.AC_LIST_FAQ();
        this.props.AC_DELETE_FAQ(formData);
        this.props.AC_LIST_FAQ();
    }
    componentDidMount() {
        this.props.AC_LIST_FAQ();
    }


    render() {

        var Faq = this.props.faqsReducer.faqList;
        console.log("=-=-=-table=", Faq)
        var resultArray = [];
        if (Faq) {
            for (var i = 0; i < Faq.length; i++) {
                resultArray.push(<tr key={i} >
                    <th scope="row">{i + 1}</th>
                    <td>{Faq[i].question}</td>
                    <td>{Faq[i].answer}</td>
                    <td>{Faq[i].status}</td>
                    <td>
                        <button type="button" id={Faq[i]._id} onClick={this.delete} class="btn btn-danger">delete</button>
                        <button type="button" id={Faq[i]._id} onClick={this.delete} class="btn">Edit</button>
                    </td>

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
                                <th scope="col">Status</th>
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
    return bindActionCreators({ AC_LIST_FAQ, AC_DELETE_FAQ }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(listFaqs);