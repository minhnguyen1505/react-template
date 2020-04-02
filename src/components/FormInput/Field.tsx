import React, { Component } from 'react';
import './FormInput.scss';

interface FieldProps {
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  onChange: any;
  onBlur?: any;
}

export default class Field extends Component<FieldProps> {
  render() {
    const { type, name, placeholder, value, onChange, onBlur } = this.props;
    return (
      <React.Fragment>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className="form-control more-than-that"
        />
      </React.Fragment>
    );
  }
}
