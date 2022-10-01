const React = require("react");
const DefaultLayout = require("../layouts/Default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit a Fridge Item">
                <form
                    action={`/fridge/${this.props.fridgeItem._id}?_method=PUT`}
                    method="POST"
                >
                    <label for="name"> Item Name: </label>
                    <input id="name" name="name" type="text" defaultValue={this.props.fridgeItem.name} required />
                    <br />
                    <label for="quantity"> Quantity: </label>
                    <input id="quantity" name="quantity" type="number" defaultValue={this.props.fridgeItem.quantity} required />
                    <br />
                    <label for="expirationDate"> Exp. Date: </label>
                    <input id="expirationDate" name="expirationDate" type="date" defaultValue={this.props.fridgeItem.expirationDate.toLocaleString()} required />
                    <br />
                    <label for="category"> Category: </label>
                    <select name="category" defaultValue={this.props.fridgeItem.category}>
                        <option value="bread"> Bread</option>
                        <option value="meat">Meat</option>
                        <option value="seafood">Seafood</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="deli">Deli</option>
                        <option value="other">Other</option>
                    </select>
                    <br />
                    <input type="submit" name="" value="Update an Item" />

                </form>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;