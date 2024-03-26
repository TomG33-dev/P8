import PropTypes from 'prop-types';

function Banner({children}) {

    return (

        <section className='banner'>
            {children}
        </section>
    )
}

Banner.propTypes = {
    children: PropTypes.node.isRequired
};

export default Banner
  