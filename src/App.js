import React, {useState} from 'react';

import GoodsPage from './Pages/GoodsPage';
import UserPage from './Pages/UserPage';

import Header from "./Components/Header";
import {login, logout} from "./store/actions";
import {connect} from "react-redux";

function App(props) {
  const [currentPage, setPage] = useState("Goods")

  let page = currentPage === "UserPage" ? <UserPage/> : <GoodsPage/>
  page = props.isAuth ? page : <p>Please login</p>

  return (
    <React.Fragment>
      <Header
          changePage={() => setPage(currentPage === "UserPage" ? "Goods" : "UserPage")}
          login={() => props.login("sample@samle.ru", "password")}
          logout={() => props.logout()}
      />
        {page}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password)),
    logout: () => dispatch(logout())
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
