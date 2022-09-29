const React = require('react')
const DefaultLayout = require('./layouts/Default')

class Index extends React.Component {
    render() {
        const { fridgeItems } = this.props;
        console.log(fridgeItems);

        return (
            <DefaultLayout title={"List of Items in your Fridge"}>
                <nav>
                    <a href={"/fridge/new"}> Add an Item </a>
                </nav>
                <ul>
                    {fridgeItems.map((item, i) => {
                        return <li key={i}>
                            <a href={`/fridge/${item._id}`}> {item.name} </a>
                        </li>
                    })}
                </ul>

            </DefaultLayout>
        )
    }
}

module.exports = Index