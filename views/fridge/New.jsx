const React = require("react");
const DefaultLayout = require("../layouts/default");
class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Add a New Item to your Food</h1>
                </div>
                <div class="new-form">
                    <form action="/fridge" method="POST">
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="name" class="form-label"> Brand: </label>
                            <input id="name" name="name" type="text" class="form-control" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="quantity" class="form-label"> Quantity: </label>
                            <input id="quantity" name="quantity" type="number" class="form-control" min="0" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="expirationDate" class="form-label" > Exp. Date: </label>
                            <input id="expirationDate" name="expirationDate" type="date" class="form-control" required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="category" class="form-label"> Category: </label>
                            <select name="category" class="form-select">
                                <option value="bread"> Bread</option>
                                <option value="meat">Meat</option>
                                <option value="seafood">Seafood</option>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="deli">Deli</option>
                                <option value="other">Other</option>
                            </select>
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