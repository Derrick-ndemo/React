
import propTypes from 'prop-types'

function List(props) {
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // Reverse alphabetical);
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // alphabetical);
    // fruits.sort((a,b) => b.cal- a.cal); // Reverse alphabetical);

    // const lowCalfruits = fruits.filter(fruit => fruit.cal <= 50)

    // const listItems = fruits.map((fruit) => (
    //     <li key={fruit.id}>
    //         {fruit.name}: &nbsp; <b>{fruit.cal} </b>
    //     </li>
    // ));
    const category = props.category;
    // eslint-disable-next-line react/prop-types
    const itemList = props.items;

    // eslint-disable-next-line react/prop-types
    const listItems = itemList.map((item) => (
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.cal} </b>
        </li>
    ));

    return (
        <>
            <h3 className="list-cat">{category}</h3>
            <ol className="list-items"> {listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: propTypes.string,
    itens: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        cal: propTypes.number,
    })),
}

List.defaultProps = {
    category: "Category",
    itens: []
}


export default List;
