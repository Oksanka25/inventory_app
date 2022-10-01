const React = require("react");
const DefaultLayout = require("../layouts/Default");

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title"> Update Beverage Item</h1>
                </div>
                <div class="new-form">

                    <form action={`/beverage/${this.props.beverageItem._id}?_method=PUT`}
                        method="POST">
                        <div class="mt-2 mb-1 col-sm-13">
                            <label for="name" class="form-label"> Brand: </label>
                            <input id="name" name="name" type="text" class="form-control" defaultValue={this.props.beverageItem.name} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="type" class="form-label" > Type: </label>
                            <input id="type" name="type" type="text" class="form-control" defaultValue={this.props.beverageItem.type} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="quantity" class="form-label"> Quantity: </label>
                            <input id="quantity" name="quantity" type="number" class="form-control" min="0" defaultValue={this.props.beverageItem.quantity} required />
                        </div>
                        <div class="mb-2 col-sm-18">
                            <label for="expirationDate" class="form-label"> Exp. Date: </label>
                            <input id="expirationDate" name="expirationDate" type="date" class="form-control" defaultValue={this.props.beverageItem.expirationDate} required />
                        </div>
                        <div class="mb-2 form-check form-switch ">
                            <label for="hasAlcohol" class="form-check-label">Alcohol </label>
                            {this.props.beverageItem.hasAlcohol ? (
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="hasAlcohol" defaultChecked />
                            ) : (
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="hasAlcohol" />
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