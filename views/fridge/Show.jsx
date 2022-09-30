const React = require("react");
const DefaultLayout = require("../layouts/default");
class Show extends React.Component {
    render() {
        const { oneItem } = this.props;
        const { reviews } = this.props;
        console.log(reviews);
        return (
            <DefaultLayout title={"Fridge Inventory"}>
                <div>
                    <h4> Name: {oneItem.name} </h4>
                    <h5> Quantity: {oneItem.quantity} </h5>
                    <h5> Exp.Date: {new Date(oneItem.expirationDate).toLocaleString()} </h5>
                    <h5> Category: {oneItem.category} </h5>


                    <br />
                    <br />
                    <br />
                    {/* // edit */}
                    <button>
                        <a href={`/fridge/${oneItem._id}/edit`}> Edit Item</a>
                    </button>
                    <br />
                    {/* // delete */}
                    <button>
                        <form action={`/fridge/${oneItem._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </button>
                    <br />
                    <p>Item added to the list: {new Date(oneItem.createdAt).toLocaleString()} </p>
                    <p>Item last updated: {new Date(oneItem.updatedAt).toLocaleString()} </p> <br />
                    <a href="/fridge"> Back to the Full Fridge</a>




                    <section>
                        <h2>Reviews of {oneItem.name}</h2>

                        {reviews.map((review, i) => {
                            return <>
                                <p> Comment: {review.comment}</p>
                                <h3> Rating: {review.rating}</h3>
                                <p>Review added on: {new Date(review.createdAt).toLocaleString()} </p>
                                <p>Review last updated: {new Date(review.updatedAt).toLocaleString()} </p> <br />
                                {/* // edit */}
                                <button>
                                    <a href={`/review/${review._id}/edit`}> Edit Review</a>
                                </button>
                                <form action={`/review/${review._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Review" />
                                </form>
                            </>
                        })}

                    </section>
                    <section section >
                        <h3>Add a Review:</h3>
                        <form method="POST" action="/review">
                            <label for="comment"> Comment: </label>
                            <input id="comment" name="comment" type="textarea" required />
                            <br />
                            <label for="rating"> Rating: </label>
                            <input id="rating" name="rating" type="number" min="0" step="1" max="5" required />
                            <br />
                            <label for="fridgeItem"> Item: </label>
                            <input type="fridgeItem" name="fridgeItem" value={oneItem._id} required /> <br />
                            <input type="submit" value="Add this Item..." />
                        </form>
                    </section >

                </div >
            </DefaultLayout >
        );
    }
}
module.exports = Show;