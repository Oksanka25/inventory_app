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


                    <div class="review-container">
                        <h3>
                            <button class="add-review-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                                Add a Review
                            </button>
                        </h3>
                        <div class="collapse collapse-horizontal" id="collapseWidthExample">
                            <div class="card card-body" style={{ width: '30%', alignItems: 'center' }}>
                                <div class="new-form">
                                    <form method="POST" action="/feedback">
                                        <div class="mt-2 mb-1 col-sm-13">
                                            <label for="comment" class="form-label">  Comment: </label>
                                            <input id="comment" class="form-control" name="comment" type="textarea" required />
                                        </div>
                                        <div class="mt-2 mb-1 col-sm-13">
                                            <label for="rating" class="form-label"> Rating: </label>
                                            <input id="rating" class="form-control" name="rating" type="number" min="0" step="1" max="5" required />
                                        </div>
                                        <label class="hidden" for="snackItem"> Item: </label>
                                        <input class="hidden" type="snackItem" name="snackItem" value={oneSnackItem._id} required /> <br />

                                        <button class="add-review-btn" type="submit">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>


                        <section >
                            <h2>Reviews of {oneSnackItem.name}</h2>
                            {feedbacks.map((fb, i) => {
                                return <div>
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
                                </div>
                            })}

                        </section>
                    </div>


                </div>
            </DefaultLayout >
        );
    }
}
module.exports = Show;