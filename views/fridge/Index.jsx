const React = require('react')
const DefaultLayout = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { fridgeItems } = this.props;
        // console.log(fridgeItems);

        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title">List of Items in Your Fridge</h1>
                </div>
                <nav class="index-top">
                    <button class="new-btn">
                        <a href={"/fridge/new"}> Add an Item </a>
                    </button>
                </nav>
                <section class="list-container">
                    <div class="card">
                        <br />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Food Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fridgeItems.map((item, i) => {
                                    return <tr>
                                        <td> {item.name} </td>
                                        <td class="list-item" key={i}><a href={`/fridge/${item._id}`}> More info</a> </td>

                                    </tr>

                                })}

                            </tbody>
                        </table>
                    </div>
                </section>


            </DefaultLayout>
        )
    }
}

module.exports = Index