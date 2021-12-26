// import React from "react";
// import { AC_LIST_PAGE } from "../actions/pages";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// class listPages extends React.Component {

//     componentDidMount() {
//         this.props.AC_LIST_PAGE();

//     }

//     render() {
//         var Page = this.props.PageReducer.pageList;
//         var resultArray = [];
//         if (Page) {
//             for (var i = 0; i < Page.length; i++) {
//                 resultArray.push(<tr key={i} >
//                     <th scope="row">{i+1}</th>
//                     <td >{Page[i].title}</td>
//                     <td >{Page[i].description}</td>
//                     <td >{Page[i].status}</td>
//                     <td> <button value={i} onClick={this.changeInput} class="btn btn-success" style={{borderRadius:'2rem'}}id="change">Edit</button></td>
//                     <td> <button value={i} onClick={this.changeInput} class="btn btn-danger" style={{position:"relative",left:'-80px',borderRadius:'2rem'}} id="change">Delete</button></td>

//                 </tr>)
//             }
//         }
//         return (
//        <div className="table">
//      <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">S.NO</th>
//       <th scope="col">Title</th>
//       <th scope="col">Description</th>
//       <th scope="col">Status</th>
//       <th scope="col">Actions</th>
//     </tr>
//   </thead>
//   <tbody>
//  {resultArray}
//   </tbody>
// </table>
//        </div>
      
//         )
//     }
// }
// function mapStateToProps(state) {

//     return {

//         PageReducer: state.PAGE_Reducer
//     }
// }

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ AC_LIST_PAGE }, dispatch)
// }

// export default connect(mapStateToProps, mapDispatchToProps)(listPages);


import React from "react";
import { AC_LIST_PAGE,AC_DELETE_PAGE } from "../actions/pages";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import swal from "sweetalert";
 
class listPages extends React.Component  {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete(event) {
        var pageId = event.target.id;
        swal({
            title: "Are you sure?",
            text: "Once deleted, the file will deleted permanently!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.deletePage(pageId);
                }
            });
    }
    deletePage(pageId){
        var formData = {
            id: pageId
        }
        this.props.AC_LIST_PAGE();
        this.props.AC_DELETE_PAGE(formData);
        this.props.AC_LIST_PAGE();
    }
    componentDidMount() {
        this.props.AC_LIST_PAGE();
    }


    render() {

        var Page = this.props.PageReducer.pageList;
        console.log("=-=-=-table=", Page)
        var resultArray = [];
        if (Page) {
            for (var i = 0; i < Page.length; i++) {
                resultArray.push(<tr key={i} >
                    <th scope="row">{i + 1}</th>
                    <td>{Page[i].title}</td>
                    <td>{Page[i].description}</td>
                    <td>{Page[i].status}</td>
                    <td>
                        <button type="button" id={Page[i]._id} onClick={this.delete} class="btn btn-danger">delete</button>
                        <button type="button" id={Page[i]._id} onClick={this.delete} class="btn">Edit</button>
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
                                <th scope="col"> Title</th>
                                <th scope="col">Description</th>
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



// function mapStateToProps(state) {
//     console.log('map state', state);
//     return {
//         faqsReducer: state.FAQ_Reducer
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ AC_LIST_FAQ, AC_DELETE_FAQ }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(listFaqs);

function mapStateToProps(state) {

        return {
    
            PageReducer: state.PAGE_Reducer
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return bindActionCreators({ AC_LIST_PAGE, AC_DELETE_PAGE }, dispatch)
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(listPages);