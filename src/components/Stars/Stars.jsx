/**
 * <function description>
 * @param   {string} rating <description>
 * @return  {<type>}        <description>
 */

function Stars({ rating }) {
    const ratingInt = parseInt(rating, 10);
    const redStars = [...Array(ratingInt)].map((_, i) => <span key={i} className="star red-star">★</span>);
    const greyStars = [...Array(5 - ratingInt)].map((_, i) => <span key={i + rating} className="star grey-star">★</span>);

    return (
        <div className="stars">
            {redStars}
            {greyStars}
        </div>
    );
}

export default Stars;