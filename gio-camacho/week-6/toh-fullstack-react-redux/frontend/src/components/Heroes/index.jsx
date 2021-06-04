import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAll } from '../../redux/actions/actionCreators';

function Heroes({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(getAll());
  }, []);

  return (
    <main className="container my-5">
      <h2>My Heroes</h2>
      <div className="d-flex flex-column align-items-start">
        {
        heroes
          .map(
            (hero, index) => (
              <Link
                className="btn btn-info my-1 w-25 text-start"
                to={`/detail/${hero.id}`}
              >
                {`${index + 1} - ${hero.name}`}
              </Link>
            ),
          )
        }
      </div>
    </main>
  );
}

Heroes.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(Heroes);
