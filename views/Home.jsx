const React = require("react");
const DefaultLayout = require("./layouts/default");
class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Welcome to Inventory App"}>
                <div>
                    <button > <a href="/fridge"> Fridge</a></button>
                    <button > <a href="/beverage"> Beverages</a></button>
                    <button > <a href="/snack"> Snacks</a></button>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Home;