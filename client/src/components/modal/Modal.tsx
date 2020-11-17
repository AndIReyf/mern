import React, {ChangeEvent, FormEvent} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {useDispatch} from "react-redux";
import {addItem} from "../../reducers/item-reducer";

export function ModalItem() {
    const dispatch = useDispatch()
    const [modal, setModal] = React.useState(false)
    const [value, setValue] = React.useState('')

    const toggleHandler = () => setModal(!modal)
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (value.trim()) {
            dispatch(addItem(value))
        }

        setValue('')
        toggleHandler()
    }

    return (
        <div>
            <Button
                color='dark'
                style={{marginBottom: '2rem'}}
                onClick={toggleHandler}
            >
                Add item
            </Button>
            <Modal isOpen={modal} toggle={toggleHandler}>
                <ModalHeader toggle={toggleHandler}>Shopping list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for='item'>Add Title</Label>
                            <Input type='text' name='name' id='item' value={value}
                                   placeholder='Title here'
                                   onChange={changeHandler}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button color="primary" style={{marginRight: '10px'}}>Add item</Button>
                            <Button color="secondary" onClick={toggleHandler}>Cancel</Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
