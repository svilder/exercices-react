import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  renderError({ touched, error }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(values) {
    
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter a name" />
        <Field name="description" component={this.renderInput} label="Enter a description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required'
  } 

  if (!values.description) {
    errors.description = 'Required'
  } 

  return errors
}

export default reduxForm({
  form: 'stream-create',
  validate
})(StreamCreate);