const React = require("react");
const DefaultLayout = require("./layouts/default");
class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Welcome to Inventory App"}>
                <div>
                    <button > <a href="/fridge"> Fridge</a></button>
                    <button > <a href="/beverages"> Beverages</a></button>
                    <button > <a href="/snacks"> Snacks</a></button>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Home;