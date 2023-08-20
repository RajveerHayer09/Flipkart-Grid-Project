import { useState } from "react";

const Show = ({ data }) => {
    const [num, setNum] = useState(0);
    if (Array.isArray(data.data)) {
        return (
            <div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setNum((num - 1 + 4) % 4);
                    }}
                >
                    Previous
                </button>
                <div>
                    <img src={data.data[num].url} alt="fashion" />
                    {data.name ? <h3>{data.data[num].name}</h3> : <div></div>}
                    {data.price ? <h4>{data.data[num].price}</h4> : <div></div>}
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setNum((num + 1) % 4);
                    }}
                >
                    Next
                </button>
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default Show;
