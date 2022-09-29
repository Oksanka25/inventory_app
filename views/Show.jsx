const React = require("react");
const DefaultLayout = require("./layouts/default");
class Show extends React.Component {
    render() {
        const { oneItem } = this.props;
        // const { reviews } = this.props;
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

                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Show;