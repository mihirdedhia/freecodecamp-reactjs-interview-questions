
// 2 types of Accordian
// single selection
// multiple selection

import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multipleselected, setMultipleselected] = useState([]);


    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multipleselected];

        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId, 1)

        setMultipleselected(cpyMultiple);
    }

    // console.log(selected, multipleselected);

    return (
        <div className="accordian-container">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">
                                <div onClick={
                                    enableMultiSelection
                                        ? () => handleMultiSelection(dataItem.id)
                                        : () => handleSingleSelection(dataItem.id)
                                }
                                    className="title"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    enableMultiSelection
                                        ? multipleselected.indexOf(dataItem.id) !== -1 && (
                                            <div className="content">{dataItem.answer}</div>
                                        )
                                        : selected === dataItem.id && (
                                            <div className="content">{dataItem.answer}</div>
                                        )
                                }
                                {/* {
                                    selected === dataItem.id || multipleselected.indexOf(dataItem.id) !== -1 ?
                                        (
                                            <div className="content">{dataItem.answer}</div>
                                        )
                                        : null
                                } */}
                            </div>
                        ))
                    ) : (
                        <div>No data found !</div>
                    )
                }
            </div>
        </div>
    )
}