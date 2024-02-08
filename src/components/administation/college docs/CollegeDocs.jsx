import React from "react";
import { allAdministrationArr } from "../../../store/store";

class DocsCollege extends React.Component {
    render() {
        return (
            <main className="all-teachers-main">
                <p className="all-teachers-heading">Полный список администрации</p>
                {allAdministrationArr.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="teachers-container">
                        <div className="info-teachers">
                            <div className="ava-teachers">

                            </div>
                            <div className="info-teachers-p">
                                <p>{data.doljnost}</p>
                                <p>{data.nameOfAdmin}</p>
                            </div>
                        </div>
                        <div className="action-teachers">
                            <button className="button-write-to">{data.writeTo}</button>
                        </div>
                    </div>
                ))}
            </main>
        );
    }
}

export default DocsCollege