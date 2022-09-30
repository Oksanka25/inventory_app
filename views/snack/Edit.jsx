const React = require("react");
const DefaultLayout = require("../layouts/Default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit a Snack Item">
                <form
                    action={`/snack/${this.props.snackItem._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="name"> Item Name: </label>
                    <input id="name" name="name" type="text" defaultValue={this.props.snackItem.name} required />
                    <br />
                    <label for="type"> Type: </label>
                    <input id="type" name="type" type="text" defaultValue={this.props.snackItem.type} required />
                    <br />
                    <label for="quantity"> Quantity: </label>
                    <input id="quantity" name="quantity" type="number" defaultValue={this.props.snackItem.quantity} required />
                    <br />
                    <label for=""> Healthy Snack: </label>
                    {this.props.snackItem.isHealthy ? (
                        <input type="checkbox" name="isHealthy" defaultChecked />
                    ) : (
                        <input type="checkbox" name="isHealthy" />
                    )}
                    <br />
                    <label for="expirationDate"> Exp. Date: </label>
                    <input id="expirationDate" name="expirationDate" type="date" defaultValue={this.props.snackItem.expirationDate.toLocaleString()} required />
                    <br />

                    <input type="submit" name="" value="Update an Item" />

                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;