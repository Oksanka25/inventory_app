const React = require("react");
const DefaultLayout = require("../layouts/default");
class Show extends React.Component {
    render() {
        const { oneSnackItem } = this.props;
        const { feedbacks } = this.props;
        console.log(this.props)
        return (
            <DefaultLayout title={"Snack Inventory"}>
                <div>
                    <h4> Name: {oneSnackItem.name} </h4>
                    <h4> Type: {oneSnackItem.type} </h4>
                    <h5> Quantity: {oneSnackItem.quantity} </h5>
                    <h5>
                        {oneSnackItem.name}
                        {oneSnackItem.isHealthy
                            ? " is a healthy snack"
                            : " is not a healthy snack"}
                    </h5>
                    <br />
                    <h5> Exp.Date: {new Date(oneSnackItem.expirationDate).toLocaleString()} </h5>

                    <br />
                    <br />
                    <br />
                    {/* // edit */}
                    <button>
                        <a href={`/snack/${oneSnackItem._id}/edit`}> Edit Item</a>
                    </button>
                    <br />
                    {/* // delete */}
                    <button>
                        <form action={`/snack/${oneSnackItem._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </button>
                    <br />
                    <p>Item added to the list: {new Date(oneSnackItem.createdAt).toLocaleString()} </p>
                    <p>Item last updated: {new Date(oneSnackItem.updatedAt).toLocaleString()} </p> <br />
                    <a href="/snack"> Back to the List of Snacks</a>


                    <section>
                        <h3>Add a Review:</h3>
                        <form method="POST" action="/feedback">
                            <label for="comment"> Comment: </label>
                            <input id="comment" name="comment" type="textarea" required />
                            <br />
                            <label for="rating"> Rating: </label>
                            <input id="rating" name="rating" type="number" min="0" step="1" max="5" required />
                            <br />
                            <label for="snackItem"> Item: </label>
                            <input type="snackItem" name="snackItem" value={oneSnackItem._id} required /> <br />
                            <input type="submit" value="Add this Item..." />
                        </form>
                    </section>
                    <section>
                        <h2>Reviews of {oneSnackItem.name}</h2>
                        {feedbacks.map((fb, i) => {
                            return <>
                                <p> Comment: {fb.comment}</p>
                                <h3> Rating: {fb.rating}</h3>
                                <p>Review added on: {new Date(fb.createdAt).toLocaleString()} </p>
                                <p>Review last updated: {new Date(fb.updatedAt).toLocaleString()} </p> <br />
                                {/* // edit */}
                                <button>
                                    <a href={`/feedback/${fb._id}/edit`}> Edit Review</a>
                                </button>
                                <form action={`/feedback/${fb._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Review" />
                                </form>
                            </>
                        })}

                    </section>

                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;