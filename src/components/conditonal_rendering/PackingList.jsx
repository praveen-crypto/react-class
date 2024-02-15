
function Item({ name, isPacked }) {
    return (
      <li className="item">
        {isPacked ? (
          <del>
            {name + ' ✔'}
          </del>
        ) : (
          name
        )}
      </li>
    );
}

function ConditionalRendering( {data} ) {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                {
                    data.map( (ele, index) => {
                        return (
                            <Item
                                isPacked = { ele["isPacked"] }
                                name = {ele["name"]}
                                key={index}
                            />
                        )

                    })
                }
                
                <Item
                    isPacked = {true}
                    name = {"Dummy"}
                />
            </ul>
        </section>
    );
}

export default ConditionalRendering;
