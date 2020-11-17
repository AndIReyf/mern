import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Header} from '../navbar/Navbar'
import {ShopCard} from "../shop-card/ShopCard";
import './app.css'
import {ModalItem} from "../modal/Modal";
import {Container} from "reactstrap";
import {useDispatch} from "react-redux";
import {getItems} from "../../reducers/item-reducer";

export function App() {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getItems())
    }, [dispatch])

    return (
        <div className="App">
            <Header/>
            <Container>
                <ModalItem/>
                <ShopCard/>
            </Container>
        </div>
    )
}
