const React = require("react");
const DefaultLayout = require("./layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Add a New Item to your Fridge "}>
                <div>
                    <form action="/fridge" method="POST">
                        <label for="name"> Item Name: </label>
                        <input id="name" name="name" type="text" required />
                        <br />
                        <label for="quantity"> Quantity: </label>
                        <input id="quantity" name="quantity" type="number" required />
                        <br />
                        <label for="expirationDate"> Exp. Date: </label>
                        <input id="expirationDate" name="expirationDate" type="date" required />
                        <br />
                        <label for="category"> Category: </label>
                        <input id="category" name="category" type="text" />
                        <br />
                        <input type="submit" name="" value="Add an Item" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;