const React = require('react')
const DefaultLayout = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { snackItems } = this.props;


        return (
            <DefaultLayout>
                <div class="title-container">
                    <h1 class="title">List of Your Snacks</h1>
                </div>
                <nav class="index-top">
                    <button class="new-btn">
                        <a href={"/snack/new"}> Add an Item </a>
                    </button>
                </nav>
                <section class="list-container">
                    <div class="card">
                        <br />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Snack Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {snackItems.map((item, i) => {
                                    return <tr>
                                        <td> {item.name} </td>
                                        <td class="list-item" key={i}><a href={`/snack/${item._id}`}> More info</a> </td>

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