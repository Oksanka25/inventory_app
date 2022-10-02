const React = require("react");
const DefaultLayout = require("../layouts/Default");
const formatDate = require('../../utils/format-date');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Update Item in Your Food</h1>
                </div>
                <div class="new-form">
                    <form
                        action={`/fridge/${this.props.fridgeItem._id}?_method=PUT`}
                        method="POST"
                    >
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="name" class="form-label"> Name: </label>
                            <input id="name" name="name" type="text" class="form-control" defaultValue={this.props.fridgeItem.name} required />
                        </div>
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="type" class="form-label"> Brand: </label>
                            <input id="type" name="type" type="text" class="form-control" defaultValue={this.props.fridgeItem.brand} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="quantity" class="form-label"> Quantity: </label>
                            <input id="quantity" name="quantity" type="number" class="form-control" min="0" defaultValue={this.props.fridgeItem.quantity} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="expirationDate" class="form-label" > Exp. Date: </label>
                            <input id="expirationDate" name="expirationDate" type="date" class="form-control" defaultValue={formatDate(this.props.fridgeItem.expirationDate)} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="category" class="form-label"> Category: </label>
                            <select name="category" class="form-select" defaultValue={this.props.fridgeItem.category}>
                                <option value="bread"> Bread</option>
                                <option value="meat">Meat</option>
                                <option value="seafood">Seafood</option>
                                <option value="frozen">Frozen</option>
                                <option value="produce">Produce</option>
                                <option value="dairy">Dairy</option>
                                <option value="deli">Deli</option>
                                <option value="bakery">Bakery</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <br />
                        <button class="update-btn" type="submit">
                            Update Item
                        </button>
                    </form>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = Edit;