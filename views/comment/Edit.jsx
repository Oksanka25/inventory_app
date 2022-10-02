const React = require("react");
const DefaultLayout = require("../layouts/default");
// Beverage Reviews
class Edit extends React.Component {
    render() {
        const { comment } = this.props;
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Update a Review</h1>
                </div>
                <div class="new-form">
                    <form
                        action={`/comment/${comment._id}?_method=PUT`}
                        method="POST"
                    >
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="comment" class="form-label"> Comment: </label>
                            <input id="comment" name="comment" type="textarea" class="form-control" defaultValue={comment.comment} required />
                        </div>
                        <div class="mb-5 col-sm-18">
                            <label for="rating" class="form-label">  Rating: </label>
                            <input id="rating" name="rating" type="number" min="0" step="1" max="5" class="form-control" defaultValue={comment.rating} required />
                        </div>

                        <button class="update-btn" type="submit">
                            Update Review
                        </button>
                    </form>
                </div>

            </DefaultLayout>
        );
    }
}
module.exports = Edit;