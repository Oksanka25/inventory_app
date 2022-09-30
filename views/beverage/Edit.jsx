const React = require("react");
const DefaultLayout = require("../layouts/Default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit a Beverage Item">
                <form
                    action={`/beverage/${this.props.beverageItem._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="name"> Item Name: </label>
                    <input id="name" name="name" type="text" defaultValue={this.props.beverageItem.name} required />
                    <br />
                    <label for="type"> Type: </label>
                    <input id="type" name="type" type="text" defaultValue={this.props.beverageItem.type} required />
                    <br />
                    <label for="quantity"> Quantity: </label>
                    <input id="quantity" name="quantity" type="number" defaultValue={this.props.beverageItem.quantity} required />
                    <br />
                    Alcohol:
                    {this.props.beverageItem.hasAlcohol ? (
                        <input type="checkbox" name="hasAlcohol" defaultChecked />
                    ) : (
                        <input type="checkbox" name="hasAlcohol" />
                    )}
                    <br />
                    <label for="expirationDate"> Exp. Date: </label>
                    <input id="expirationDate" name="expirationDate" type="date" defaultValue={this.props.beverageItem.expirationDate.toLocaleString()} required />
                    <br />

                    <input type="submit" name="" value="Update an Item" />

                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;