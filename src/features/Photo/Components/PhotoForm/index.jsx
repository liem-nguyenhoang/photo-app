import { Button } from 'bootstrap';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormGroup, Input, Label } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from "../../../../constants/global";
import Images from "../../../../constants/images";

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Wow nature" />
            </FormGroup>
            <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"

                    placeholder="What's up your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup >
                <Label for="categoryId">Photo</Label>
                <div><Button type="button" outline color="primary">Random a photo</Button></div>
                <div><img width="200px" height="200px" src={Images.COLORFUL_BG} alt="Colorful background" /></div>
            </FormGroup>

            <FormGroup >
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;