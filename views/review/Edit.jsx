const React = require("react");
const DefaultLayout = require("../layouts/default");

class Edit extends React.Component {
    render() {
        const { review } = this.props;
        return (
            <DefaultLayout title="Edit a Review">

                <form
                    action={`/review/${review._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="comment"> Comment: </label>
                    <input id="comment" name="comment" type="textarea" defaultValue={review.comment} required />
                    <br />
                    <label for="rating"> Rating: </label>
                    <input id="rating" name="rating" type="number" min="0" step="1" max="10" defaultValue={review.rating} required />
                    <br />

                    <input type="submit" value="Update Review" />
                </form>


            </DefaultLayout>
        );
    }
}
module.exports = Edit;