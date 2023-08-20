import React from "react";
import Show from "./Show.js";

function Right({ AIdata, RelData }) {
    return (
        <div>
            <Show data={AIdata}>Generated Images</Show>
            {/* <Show data={RelData}>Realted Products</Show> */}
        </div>
    );
}

export default Right;
