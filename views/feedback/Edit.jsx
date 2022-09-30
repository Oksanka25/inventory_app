const React = require("react");
const DefaultLayout = require("../layouts/default");

class Edit extends React.Component {
    render() {
        const { feedback } = this.props;
        return (
            <DefaultLayout title="Edit a Review">

                <form
                    action={`/feedback/${feedback._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="comment"> Comment: </label>
                    <input id="comment" name="comment" type="textarea" defaultValue={feedback.comment} required />
                    <br />
                    <label for="rating"> Rating: </label>
                    <input id="rating" name="rating" type="number" min="0" step="1" max="10" defaultValue={feedback.rating} required />
                    <br />

                    <input type="submit" value="Update Review" />
                </form>


            </DefaultLayout>
        );
    }
}
module.exports = Edit;