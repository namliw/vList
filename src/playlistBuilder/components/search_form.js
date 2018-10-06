import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {searchVideos} from '../actions/searchAction';

class SearchForm extends Component {
    /**
     * takes care of displaying the texfield into the dom
     * @returns {*}
     * @param field
     */
    renderTextField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${(touched && error ? 'has-danger' : '')}`;

        return (<div className={className}>
            <label>{field.label}</label>
            <input className="form-control" type="text" {...field.input} />
            <div className="text-help">
                {touched ? error : ''}
            </div>
        </div>);
    }

    /**
     * handles form submission
     * @param values
     */
    onSubmit(values){
        this.props.searchVideos(values.searchTerm);
    }

    /**
     * returns what needs to be displayed on the DOM
     * @returns {*}
     */
    render() {
        const {handleSubmit, pristine, reset, submitting} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field name="searchTerm" label="Search box" component={this.renderTextField}/>
                <div>
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                            Submit
                        </button>
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}


export default reduxForm({
    form: 'searchForm'
})(connect(null,{searchVideos})(SearchForm));