import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    phone: Yup.string()
      // .positive("Invalid phone number")
      // .integer("Invalid phone number")
      .required("Required")
      .matches(/^[0-9]+$/, "Must be only number")
      .min(9, "Must be exactly 9 number")
      .max(9, "Must be exactly 9 number"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form className="form-student">
          <FormGroup>
            <label className="text-muted">Name:</label>
            <Field
              name="name"
              type="text"
              className="form-control"
              placeholder="Enter Student Name"
            />
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label className="text-muted">Email:</label>
            <Field
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter Student Email"
            />
            <ErrorMessage
              name="email"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <label className="text-muted">Phone:</label>
            <Field
              name="phone"
              type="string"
              className="form-control"
              placeholder="Enter Student Phone Number"
            />
            <ErrorMessage
              name="phone"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button
            className="btn-summit"
            variant="danger"
            size="lg"
            block="block"
            type="submit"
          >
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;
