import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchProducts} from "../store/actions"

const GoodsPage = (props) => {
    useEffect(() => {
        props.fetchProducts(props.isAuth)
    }, [props.isAuth])

    return (
        <ul>
            {props.goods.map((product) => (
                <li key={product.id}>{product.productName}</li>
            ))}
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: (isAuth) => dispatch(fetchProducts(isAuth))
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        isAuth: state.isAuth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoodsPage)
