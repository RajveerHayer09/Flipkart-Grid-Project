const Show = (props) => {
    if (props.data && Array.isArray(props.data)) {
        return (
            <div>
                <h1>{props.children}</h1>
                {props.data.map((data) => {
                    return (
                        <div>
                            <img src={data.url} alt="fashion" />
                            {data.name ? <h3>{data.name}</h3> : <div></div>}
                            {data.price ? <h4>{data.price}</h4> : <div></div>}
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Show;
