import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AC_ADD_PAGE, AC_LIST_PAGE } from "../actions/pages";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Swal from 'sweetalert';
class AddPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            titleError: false,
            titleCountError: false,
            description: '',
            descriptionError: false,
            descriptionCountError: false,
            status: '',
            statusError: false,

        }
        this.validation = this.validation.bind(this)
        this.inputchange = this.inputchange.bind(this);
    }
    validation() {
        const title = this.state.title;
        const description = this.state.description;
        const status = this.state.status
        if (title) {
            if (title.length < 5) {
                this.setState({ titleError: false, titleCountError: true })
            }
            else {
                this.setState({ titleError: false, titleCountError: false })
            }
        }
        else {
            this.setState({ titleError: true, titleCountError: false })
        }

        if (description) {
            if (description.length < 5) {
                this.setState({ descriptionError: false, descriptionCountError: true })
            }
            else {
                this.setState({ descriptionError: false, descriptionCountError: false })
            }
        }
        else {
            this.setState({ descriptionError: true, descriptionCountError: false })
        }

        if (status) {
            this.setState({ statusError: false })
        }
        else {
            this.setState({ statusError: true })
        }

        const pageData = {
            title: this.state.title,
            description: this.state.description,
            status: this.state.status
        }
        this.props.pagedata(pageData);
        console.log('-=value-=', pageData)

        if (title && description && status) {
            Swal('Page Added Successfully!', 'You clicked button!', 'success');
        }
        else {
            Swal('Add your Page Details!', 'You clicked button!', 'error');
        }
    }


    inputchange(event) {
        const titleid = event.target.id;
        const titlevalue = event.target.value;
        const descriptionid = event.target.id;
        const descriptionvalue = event.target.value;
        const statusid = event.target.id;
        const statusvalue = event.target.value;

        if (titleid == "title") {
            this.setState({ title: titlevalue })
            if (titlevalue) {
                if (titlevalue.length < 5) {
                    this.setState({ titleError: false, titleCountError: true })
                }
                else {
                    this.setState({ titleError: false, titleCountError: false })
                }
            }
            else {
                this.setState({ titleError: true, titleCountError: false })
            }
        }

        if (descriptionid == "description") {
            this.setState({ description: descriptionvalue })
            if (descriptionvalue) {
                if (descriptionvalue.length < 5) {
                    this.setState({ descriptionError: false, descriptionCountError: true })
                }
                else {
                    this.setState({ descriptionError: false, descriptionCountError: false })
                }
            }
            else {
                this.setState({ descriptionError: true, descriptionCountError: false })
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
            <> <div class="container-fluid pages" style={{ width: '600px' }}>
                <h4 class="page-title">
                      Add Page
                </h4>
                <div class="col-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <form class="forms-sample">
                                <div class="form-group">
                                    <h4 >Title</h4>
                                    <input type="text" placeholder="Title" id="title" value={this.state.title} onChange={this.inputchange} style={{ borderColor: this.state.color0 }} class="form-control" ></input>
                                    {this.state.titleError ? <label class="mt-2" style={{ color: 'red' }}>Title is required</label> : ""}
                                    {this.state.titleCountError ? <label class="mt-2" style={{ color: 'red' }}>Title should be atleast 5 characters</label> : ""}

                                </div>
                                <div class="form-group">
                                    <h4 >Description</h4>
                                    <input type="text" placeholder="Description" id="description" value={this.state.description} onChange={this.inputchange} style={{ borderColor: this.state.color1 }} class="form-control" ></input>
                                    {this.state.descriptionError ? <label class="mt-2" style={{ color: 'red' }}>Description is required</label> : ""}
                                    {this.state.descriptionCountError ? <label class="mt-2" style={{ color: 'red' }}>Description should be atleast 5 characters</label> : ""}

                                </div>
                                <div class="form-group">
                                    <h4 >Status</h4>
                                    <select class="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.inputchange} >
                                        <option selected>Choose...</option>
                                        <option value="true" >Active</option>
                                        <option value="false" >Inactive</option>
                                    </select>
                                    {this.state.statusError ? <label class="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                </div>
                                <button type="button" class="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white',    borderRadius:'2rem' }} onClick={this.validation}>Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
function mapStateToProps(state) {

    return {

        page: state.PageReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pages: AC_LIST_PAGE,
        pagedata: AC_ADD_PAGE
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPages);