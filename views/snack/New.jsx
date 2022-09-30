const React = require("react");
const DefaultLayout = require("../layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Add a New Item to your Snack List "}>
                <div>
                    <form action="/snack" method="POST">
                        <label for="name"> Name: </label>
                        <input id="name" name="name" type="text" required />
                        <br />
                        <label for="type"> Type: </label>
                        <input id="type" name="type" type="text" required />
                        <br />
                        <label for="quantity"> Quantity: </label>
                        <input id="quantity" name="quantity" type="number" required />
                        <br />
                        <label for="isHealthy"> Healthy Snack: </label>
                        <input type="checkbox" name="isHealthy" />

                        <br />
                        <label for="expirationDate"> Exp. Date: </label>
                        <input id="expirationDate" name="expirationDate" type="date" required />
                        <br />
                        <input type="submit" name="" value="Add an Item" />
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;