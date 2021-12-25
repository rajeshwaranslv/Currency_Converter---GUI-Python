import React from "react";
import { AC_LIST_PAGE } from "../actions/pages";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class listPages extends React.Component {

    componentDidMount() {
        this.props.AC_LIST_PAGE();

    }

    render() {
        var Page = this.props.PageReducer.pageList;
        var resultArray = [];
        if (Page) {
            for (var i = 0; i < Page.length; i++) {
                resultArray.push(<tr key={i} >
                    <th scope="row">{i+1}</th>
                    <td style={{height:'5rem'}}>{Page[i].title}</td>
                    <td >{Page[i].description}</td>
                    <td >{Page[i].status}</td>
                    <td> <button value={i} onClick={this.changeInput} class="btn btn-success" id="change">Edit</button></td>
                    <td> <button value={i} onClick={this.changeInput} class="btn btn-danger" id="change">Delete</button></td>

                </tr>)
            }
        }
        return (
            <table class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
 {resultArray}
  </tbody>
</table>
            // <>
            //     <table class="table">
            //         <thead>
            //             <tr>
            //                 <th scope="col">S.No</th>
            //                 <th scope="col">Title</th>
            //                 <th scope="col">Description</th>
            //                 <th scope="col">Status</th>
            //                 <th scope="col">Actions</th>
            //             </tr>
            //         </thead>
            //         <tbody>

            //             {resultArray}
            //         </tbody>
            //     </table>
            // </>
        )
    }
}
function mapStateToProps(state) {

    return {

        PageReducer: state.PAGE_Reducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_PAGE }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(listPages);