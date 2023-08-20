import React from "react";
import Right from "./Right";
import Left from "./Left";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Body.css";

function Body() {
    const [data, setData] = useState({});
    const [GenAIdata, setGenAIData] = useState({});
    const [relatedItems, setRelatedItems] = useState({});
    const [text, setText] = useState("");

    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/items")
            .then((response) => setData(response.data));
    }, []);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-title">FLIPKART</div>
                <div className="navbar-search">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Write your prompt here"
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            console.log("here");
                            const url = `http://127.0.0.1:5000/api/photos?query=${text}`;
                            const keywords = `http://127.0.0.1:5000/api/keywords?query=${text}`;
                            axios
                                .get(url)
                                .then((response) =>
                                    setGenAIData(response.data)
                                );

                            const rel = { data: [] };
                            axios.get(keywords).then((response) => {
                                const list = response.data;
                                for (const key in data) {
                                    if (
                                        key["tags"].some((tag) =>
                                            list.includes(tag)
                                        )
                                    ) {
                                        rel.data.push(key);
                                    }
                                }
                            });
                            setRelatedItems(rel);
                        }}
                    >
                        Search
                    </button>
                </div>
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            Home
                        </a>
                    </li>
                    <li className="navbar-item">
                        <a href="#" className="navbar-link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="body">
                <Left className="left">left</Left>
                <Right
                    className="right"
                    AIdata={GenAIdata}
                    RelData={relatedItems}
                />
            </div>
        </div>
    );
}

export default Body;
