const React = require("react");
const DefaultLayout = require("../layouts/default");
class Show extends React.Component {
    render() {
        const { oneBevItem } = this.props;
        const { comments } = this.props;
        console.log(this.props)
        return (
            <DefaultLayout title={"Beverage Inventory"}>
                <div>
                    <h4> Name: {oneBevItem.name} </h4>
                    <h4> Type: {oneBevItem.type} </h4>
                    <h5> Quantity: {oneBevItem.quantity} </h5>
                    <h5>
                        {oneBevItem.name}
                        {oneBevItem.hasAlcohol
                            ? " Is an alcoholic beverage"
                            : " is a non-alcoholic beverage  "}
                    </h5>
                    <br />
                    <h5> Exp.Date: {new Date(oneBevItem.expirationDate).toLocaleString()} </h5>

                    <br />
                    <br />
                    <br />
                    {/* // edit */}
                    <button>
                        <a href={`/beverage/${oneBevItem._id}/edit`}> Edit Item</a>
                    </button>
                    <br />
                    {/* // delete */}
                    <button>
                        <form action={`/beverage/${oneBevItem._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="DELETE" />
                        </form>
                    </button>
                    <br />
                    <p>Item added to the list: {new Date(oneBevItem.createdAt).toLocaleString()} </p>
                    <p>Item last updated: {new Date(oneBevItem.updatedAt).toLocaleString()} </p> <br />
                    <a href="/beverage"> Back to the List of Beverages</a>


                    <section>
                        <h3>Add a Review:</h3>
                        <form method="POST" action="/comment">
                            <label for="comment"> Comment: </label>
                            <input id="comment" name="comment" type="textarea" required />
                            <br />
                            <label for="rating"> Rating: </label>
                            <input id="rating" name="rating" type="number" min="0" step="1" max="5" required />
                            <br />
                            <label for="beverageItem"> Item: </label>
                            <input type="beverageItem" name="beverageItem" value={oneBevItem._id} required /> <br />
                            <input type="submit" value="Add this Item..." />
                        </form>
                    </section>
                    <section>
                        <h2>Comments of {oneBevItem.name}</h2>
                        {comments.map((com, i) => {
                            return <>
                                <p> Comment: {com.comment}</p>
                                <h3> Rating: {com.rating}</h3>
                                <p>Review added on: {new Date(com.createdAt).toLocaleString()} </p>
                                <p>Review last updated: {new Date(com.updatedAt).toLocaleString()} </p> <br />
                                {/* // edit */}
                                <button>
                                    <a href={`/comment/${com._id}/edit`}> Edit Comment</a>
                                </button>
                                <form action={`/comment/${com._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Comment" />
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