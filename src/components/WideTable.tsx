import usePlacanStore from "../usePlacanStore";
import "./table.css";

export default function WideTable() {

    const {
        data,
        shownData,
        setFilter,
    } = usePlacanStore();

    return (
        <table id="wideTable">

            <caption>Seznam deljenih plačnih razmerij</caption>

            <thead id="tableBox">
                <tr>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("job")}>
                        Naziv dela
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("hours")}>
                        Ure na teden
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("school")}>
                        Izobrazba
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("years")}>
                        Leta izkušenj
                    </th>
                    <th
                        class={"actMouse"}
                        onClick={() => setFilter("pay")}>
                        Plača na mesec
                    </th>
                </tr>
            </thead>

            <tbody>
                {data.map(
                    (info) => {
                        return (
                            <tr>
                                <td>{shownData["job"] ? info.job : ""}</td>
                                <td>{shownData["hours"] ? info.hours + " ur" : ""}</td>
                                <td>
                                    {shownData["schoolTier"] ? <span class={"block"}>
                                        {info.schoolTier + ". stopnja"}
                                    </span> : <></>}
                                    {shownData["school"] ? <span class={"block"}>
                                        {info.school}
                                    </span> : <></>}
                                </td>
                                <td>{shownData["years"] ? `${info.years} let${info.years === 1 ?
                                    "o" :
                                    info.years === 2 ?
                                        "i" :
                                        info.years === 3 || info.years === 4 ?
                                            "a" :
                                            ""}` : ""}</td>
                                <td>{shownData["pay"] ?
                                    info.pay
                                        .toString()
                                        .split("")
                                        .reverse()
                                        .map((number, index) => {
                                            return (
                                                index % 3 === 0 &&
                                                    index !== 0 ?
                                                    number + "." :
                                                    number
                                            )
                                        })
                                        .reverse()
                                        .join("")
                                    + " €" : ""}
                                </td>
                            </tr>
                        )
                    })}
            </tbody>

        </table>
    )
}