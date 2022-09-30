const React = require('react')
const DefaultLayout = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { snackItems } = this.props;


        return (
            <DefaultLayout title={"List of Snacks"}>
                <nav>
                    <a href={"/snack/new"}> Add an Item </a>
                </nav>
                <ul>
                    {snackItems.map((item, i) => {
                        return <li key={i}>
                            <a href={`/snack/${item._id}`}> {item.name} </a>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index