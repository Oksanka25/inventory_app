const React = require("react");
const DefaultLayout = require("../layouts/default");

class Edit extends React.Component {
    render() {
        const { comment } = this.props;
        return (
            <DefaultLayout title="Edit a Review">

                <form
                    action={`/comment/${comment._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="comment"> Comment: </label>
                    <input id="comment" name="comment" type="textarea" defaultValue={comment.comment} required />
                    <br />
                    <label for="rating"> Rating: </label>
                    <input id="rating" name="rating" type="number" min="0" step="1" max="10" defaultValue={comment.rating} required />
                    <br />

                    <input type="submit" value="Update Review" />
                </form>


            </DefaultLayout>
        );
    }
}
module.exports = Edit;