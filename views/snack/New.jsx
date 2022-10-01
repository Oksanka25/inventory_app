const React = require("react");
const DefaultLayout = require("../layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Add a New Item to your Snack List</h1>
                </div>
                <div class="new-form">
                    <form action="/snack" method="POST">
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="name" class="form-label"> Brand: </label>
                            <input id="name" name="name" type="text" class="form-control" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="type" class="form-label"> Type: </label>
                            <input id="type" name="type" type="text" class="form-control" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="quantity" class="form-label"> Quantity: </label>
                            <input id="quantity" name="quantity" type="number" class="form-control" min="0" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="expirationDate" class="form-label"> Exp. Date: </label>
                            <input id="expirationDate" name="expirationDate" type="date" class="form-control" required />
                        </div>
                        <div class="mb-2 form-check form-switch ">
                            <label for="isHealthy" class="form-check-label"> Healthy </label>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="isHealthy" />
                        </div>
                        <br />
                        <button class="add-btn" type="submit">
                            Add Item
                        </button>
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;