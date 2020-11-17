import React from "react";
import {Button, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../store/store";
import {ItemsType} from "../../actions/items-type";
import {delItem} from "../../reducers/item-reducer";

export function ShopCard() {
    const dispatch = useDispatch()
    const items = useSelector<RootReducerType, ItemsType>(state => state.item.items)

    const removeHandler = (id: string) => {
        dispatch(delItem(id))
    }

    return (
        <ListGroup>
            <TransitionGroup className='shopping-list'>
                {
                    items.map(({_id, name}) => (
                        <CSSTransition key={_id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                <Button
                                    style={{marginRight: '10px'}}
                                    className='remove-btn'
                                    color='danger'
                                    size='small'
                                    onClick={() => removeHandler(_id)}
                                >
                                    &times;
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </ListGroup>
    )
}
