const React = require("react");
const DefaultLayout = require("../layouts/default");
const formatDate = require('../../utils/format-date')
class Show extends React.Component {
    render() {
        const { oneItem, reviews } = this.props;
        return (
            <DefaultLayout >
                <div class="title-container" style={{ marginBottom: '4rem' }}>
                    <h1 class="title"> Food Details</h1>
                </div>
                <div class="top-container">
                    <div class="card" style={{ width: '25rem', marginLeft: "20%", marginRight: '10%', height: '25rem', padding: '1rem' }}>
                        <div class="card-body">
                            <h4 class="card-title"> Name: {oneItem.name} </h4>
                            <h4 class="card-subtitle mb-2"> Type: {oneItem.type} </h4>
                            <h5 class="card-subtitle mb-2"> Quantity: {oneItem.quantity} </h5>
                            <h5 class="card-subtitle mb-2"> Category: {oneItem.category} </h5>
                            <h5 class="card-subtitle mb-2"> Exp.Date: {formatDate(new Date(oneItem.expirationDate))} </h5>
                            <br />
                            <p class="card-text">Item added to the list: {new Date(oneItem.createdAt).toLocaleString()} </p>
                            <p class="card-text">Item last updated: {new Date(oneItem.updatedAt).toLocaleString()} </p>
                            <br />
                            <div style={{ justifyContent: 'center' }}>
                                <button class=" edit-details-btn" style={{ paddingRight: '1em', marginBottom: '1rem' }}>
                                    <a href={`/fridge/${oneItem._id}/edit`}> Edit Item</a>
                                </button>
                                <form action={`/fridge/${oneItem._id}?_method=DELETE`} method="POST">
                                    <button type="submit" class="delete-details-btn"> Delete Item</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="review-container">
                        <div class="card card-body" style={{ width: '120%', alignItems: 'center', marginTop: '1rem' }}>
                            <h3 class="add-review" > Add a Review </h3>
                            <div class="new-form">
                                <form method="POST" action="/review">
                                    <div class="mb-1 col-sm-13">
                                        <label for="comment" class="form-label">  Comment: </label>
                                        <input id="comment" class="form-control" name="comment" type="textarea" required />
                                    </div>
                                    <div class="mt-2 mb-1 col-sm-13">
                                        <label for="rating" class="form-label"> Rating: </label>
                                        <input id="rating" class="form-control" name="rating" type="number" min="0" step="1" max="5" required />
                                    </div>
                                    <label class="hidden" for="fridgeItem"> Item: </label>
                                    <input class="hidden" type="fridgeItem" name="fridgeItem" value={oneItem._id} required /> <br />

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
                        <h2 class="title" > '{oneItem.name}' Reviews</h2>
                    </div >
                    <div class="d-flex flex-wrap gap-4 justify-content-center">
                        {reviews.map((review, i) => {
                            return <div class="card" style={{ maxWidth: '300px', padding: '1rem' }}  >
                                <div class="card-body d-flex flex-column justify-content-between">
                                    <div class="">
                                        <h3 class="card-title"> Comment:
                                            <br /> {review.comment}</h3>
                                        <h4 class="card-subtitle mb-2" > Rating: {review.rating}</h4>
                                        <p class="card-text">Review added on: {new Date(review.createdAt).toLocaleString()} </p>
                                        <p class="card-text">Review last updated: {new Date(review.updatedAt).toLocaleString()} </p> <br />
                                    </div>
                                    <div class="d-flex gap-2 justify-content-center">
                                        <button class="edit-details-btn" style={{ width: '80px' }}>
                                            <a href={`/review/${review._id}/edit`}> Edit</a>
                                        </button>
                                        <form action={`/review/${review._id}?_method=DELETE`} method="POST" style={{ width: '80px' }}>
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