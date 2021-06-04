import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getAll } from '../../redux/actions/actionCreators';

function Dashboard({ heroes, dispatch }) {
  useEffect(() => {
    if (!heroes.length) dispatch(getAll());
  }, []);

  return (
    <main className="container my-5">
      <h2>Top Heroes</h2>
      <div className="d-flex flex-column">
        {
        heroes
          .sort(() => Math.random() - 0.5)
          .slice(1, 5)
          .map(
            (hero) => (
              <Link
                className="btn btn-info my-1 text-center"
                to={`/detail/${hero.id}`}
              >
                {hero.name}
              </Link>
            ),
          )
        }
      </div>
    </main>
  );
}

Dashboard.propTypes = {
  heroes: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    heroes: store.heroes,
  };
}

export default connect(mapStateToProps)(Dashboard);
