const React = require('react')
const DefaultLayout = require('../layouts/Default')

class Index extends React.Component {
    render() {
        const { beverageItems } = this.props;


        return (
            <DefaultLayout title={"List of Beverages"}>
                <nav>
                    <a href={"/beverage/new"}> Add an Item </a>
                </nav>
                <ul>
                    {beverageItems.map((item, i) => {
                        return <li key={i}>
                            <a href={`/beverage/${item._id}`}> {item.name} </a>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index