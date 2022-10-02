const React = require("react");
const DefaultLayout = require("../layouts/default");
const formatDate = require('../../utils/format-date')
class Show extends React.Component {
    render() {
        const { oneSnackItem, feedbacks } = this.props;
        return (
            <DefaultLayout >
                <div class="title-container" style={{ marginBottom: '4rem' }}>
                    <h1 class="title"> Snack Details</h1>
                </div>
                <div class="top-container">
                    <div class="card" style={{ width: '25rem', marginLeft: "20%", marginRight: '10%', height: '25rem', padding: '1rem' }}>
                        <div class="card-body">
                            <h4 class="card-title"> Name: {oneSnackItem.name} </h4>
                            <h4 class="card-subtitle mb-2"> Type: {oneSnackItem.type} </h4>
                            <h5 class="card-subtitle mb-2"> Quantity: {oneSnackItem.quantity} </h5>
                            <h5 class="card-subtitle mb-2">
                                {oneSnackItem.name}
                                {oneSnackItem.isHealthy
                                    ? " is a healthy snack"
                                    : " is not a healthy snack"}
                            </h5>
                            <h5 class="card-subtitle mb-2"> Exp.Date: {formatDate(new Date(oneSnackItem.expirationDate))} </h5>
                            <br />
                            <p class="card-text">Item added to the list: {new Date(oneSnackItem.createdAt).toLocaleString()} </p>
                            <p class="card-text">Item last updated: {new Date(oneSnackItem.updatedAt).toLocaleString()} </p>
                            <br />
                            <div style={{ justifyContent: 'center' }}>
                                <button class=" edit-details-btn" style={{ paddingRight: '1em', marginBottom: '1rem' }}>
                                    <a href={`/snack/${oneSnackItem._id}/edit`}> Edit Item</a>
                                </button>
                                <form action={`/snack/${oneSnackItem._id}?_method=DELETE`} method="POST">
                                    <button type="submit" class="delete-details-btn"> Delete Item</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="review-container">

                        <div class="card card-body" style={{ width: '120%', alignItems: 'center', marginTop: '1rem' }}>
                            <h3 class="add-review" > Add a Review </h3>
                            <div class="new-form">
                                <form method="POST" action="/feedback">
                                    <div class="mb-1 col-sm-13">
                                        <label for="comment" class="form-label">  Comment: </label>
                                        <input id="comment" class="form-control" name="comment" type="textarea" required />
                                    </div>
                                    <div class="mt-2 mb-1 col-sm-13">
                                        <label for="rating" class="form-label"> Rating: </label>
                                        <input id="rating" class="form-control" name="rating" type="number" min="0" step="1" max="5" required />
                                    </div>
                                    <label class="hidden" for="snackItem"> Item: </label>
                                    <input class="hidden" type="snackItem" name="snackItem" value={oneSnackItem._id} required /> <br />

                                    <button class="submit-review-btn" type="submit">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="reviews-block" >
                    <div class="title-container" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                        <h2 class="title" > '{oneSnackItem.name}' Reviews</h2>
                    </div >
                    <div class="d-flex flex-wrap gap-4 justify-content-center">
                        {feedbacks.map((fb, i) => {
                            return <div class="card" style={{ maxWidth: '300px', padding: '1rem' }}  >
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div class="">
                                        <h3 class="card-title"> Comment:
                                            <br /> {fb.comment}</h3>
                                        <h4 class="card-subtitle mb-2" > Rating: {fb.rating}</h4>
                                        <p class="card-text">Review added on: {new Date(fb.createdAt).toLocaleString()} </p>
                                        <p class="card-text">Review last updated: {new Date(fb.updatedAt).toLocaleString()} </p> <br />
                                    </div>
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button class="edit-details-btn" style={{ width: '80px' }}>
                                            <a href={`/feedback/${fb._id}/edit`}> Edit</a>
                                        </button>
                                        <form action={`/feedback/${fb._id}?_method=DELETE`} method="POST" style={{ width: '80px' }}>
                                            <button type="submit" class="delete-details-btn" > Delete</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </DefaultLayout >
        );
    }
}
module.exports = Show;