const React = require('react')
const DefaultLayout = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { beverageItems } = this.props;


        return (
            <DefaultLayout >
                <div class="title-container">
                    <h1 class="title">List of Your Beverages</h1>
                </div>
                <nav class="index-top">
                    <button class="new-btn">
                        <a href={"/beverage/new"}> Add an Item </a>
                    </button>
                </nav>
                <section class="list-container">
                    <div class="card">
                        <br />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Beverage Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {beverageItems.map((item, i) => {
                                    return <tr>
                                        <td> {item.name} </td>
                                        <td class="list-item" key={i}><a href={`/beverage/${item._id}`}> More info</a> </td>

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