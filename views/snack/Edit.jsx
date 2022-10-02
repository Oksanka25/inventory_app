const React = require("react");
const DefaultLayout = require("../layouts/Default");
const formatDate = require('../../utils/format-date');

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Update a Snack Item</h1>
                </div>
                <div class="new-form">
                    <form action={`/snack/${this.props.snackItem._id}?_method=PUT`}
                        method="POST">
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="name" class="form-label"> Name: </label>
                            <input id="name" name="name" type="text" class="form-control" defaultValue={this.props.snackItem.name} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="type" class="form-label"> Type: </label>
                            <input id="type" name="type" type="text" class="form-control" defaultValue={this.props.snackItem.type} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="quantity" class="form-label"> Quantity: </label>
                            <input id="quantity" name="quantity" type="number" class="form-control" min="0" defaultValue={this.props.snackItem.quantity} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="expirationDate" class="form-label"> Exp. Date: </label>
                            <input id="expirationDate" name="expirationDate" type="date" class="form-control" defaultValue={formatDate(this.props.snackItem.expirationDate)} required />
                        </div>
                        <div class="mb-2 form-check form-switch ">
                            <label for="isHealthy" class="form-check-label"> Healthy </label>
                            {this.props.snackItem.isHealthy ? (
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="isHealthy" defaultChecked />
                            ) : (
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="isHealthy" />
                            )}
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