/* eslint-disable no-undef */
import { React } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
// import { useDispatch } from 'react-redux';
// import { login } from '../../redux/actions/actionCreators';

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(login());
  // });
  return (
    <>
      <h1 className="d-grid gap-2">Bienvenido a Canaryfly</h1>
      <Header> </Header>
      <Link to="/form">

        <button type="button" className="btn btn-light m-3 p-3">Form</button>

      </Link>
    </>
  );
}

export default App;
