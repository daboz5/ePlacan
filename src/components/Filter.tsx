import { useState } from "preact/hooks";
import ArrowUp from "../assets/ArrowUp";

import usePlacanStore from "../usePlacanStore";
import useFilter from "../utils/useFilter";

import "./filter.css";

export default function Filter() {

    const {
        filter,
        backup,
        shownData,
        setFilter,
        setData,
        setShownData,
    } = usePlacanStore();

    const {
        activeSchoolTiers,
        changeSchoolTierStatus,
        schoolTierFilter,
        sortForward,
        sortBackward,
        querryFilter,
        rangeFilter,
        remoteDataType,
        filterWordSwitch,
    } = useFilter();

    const [keepArrData, setKeepArrData] = useState(true);

    const defaultFilter = {
        id: false,
        job: true,
        hours: true,
        schoolTier: true,
        school: true,
        years: true,
        pay: true
    }

    const tierBtn = (btnNum: number) => {
        return <button
            id={`schoolTierBtn${btnNum}`}
            class={"schoolTierBtn"}
            style={{
                backgroundColor: activeSchoolTiers[btnNum - 1].status ? "" : "rgba(26, 26, 26, 0.8)"
            }}
            onClick={() => {
                changeSchoolTierStatus(btnNum);
                schoolTierFilter();
            }}>
            {btnNum}
        </button>
    }

    return filter ? (
        <div id="filterPosition" class={"colFlex"}>
            <div id="filterBox" class={"colFlex"}>

                {/* ZAPRI FILTER */}

                <button
                    id="filterExitBtn"
                    class={"noResizeBtn"}
                    onClick={() => setFilter(null)}>
                    Zapri filter
                </button>

                {/* OBRNI SEZNAM */}

                <div class={"filterOrientation flex"}>
                    <button
                        class={"downBtn flex"}
                        onClick={() => setData(sortForward(filter, backup))}>
                        <ArrowUp id={"nazivGor"} />
                    </button>
                    <button
                        class={"upBtn flex"}
                        onClick={() => setData(sortBackward(filter, backup))}>
                        <ArrowUp id={"nazivGor"} up={true} />
                    </button>
                </div>

                {/* FILTER BESED */}

                {filter === "job" ?
                    <span class={"colFlex"}>
                        <input
                            id="jobFilterInput"
                            class={"filterInput"}
                            type="text"
                            placeholder="Naziv dela"
                            autocomplete={"off"}
                            maxLength={20}>
                        </input>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => querryFilter("job", "jobFilterInput", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>}

                {/* FILTER DELOVNIH UR */}

                {filter === "hours" ?
                    <span class={"colFlex"}>
                        <span class={"flex rangeBox"}>
                            <input
                                id="hoursFilterInputMin"
                                type="text"
                                placeholder="Min ur"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <input
                                id="hoursFilterInputMax"
                                type="text"
                                placeholder="Max ur"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                        </span>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => rangeFilter("hours", "hoursFilterInputMin", "hoursFilterInputMax", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>}

                {/* FILTER ŠOLSKIH PROGRAMOV */}

                {filter === "school" ?
                    <>

                        <div id={"filterSchoolTierBtns"}>
                            <caption>Stopnja izobrazbe</caption>
                            {tierBtn(1)}
                            {tierBtn(2)}
                            {tierBtn(3)}
                            {tierBtn(4)}
                            {tierBtn(5)}
                            {tierBtn(6)}
                            {tierBtn(7)}
                        </div>

                        <span class={"colFlex"}>
                            <input
                                id="schoolFilterInput"
                                class={"filterInput"}
                                type="text"
                                placeholder="Naziv šole"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => querryFilter("school", "schoolFilterInput", keepArrData)}>
                                Potrdi
                            </button>

                        </span>
                    </> :
                    <></>}

                {/* FILTER DELOVNIH LET */}

                {filter === "years" ?
                    <span class={"colFlex"}>
                        <span class={"flex rangeBox"}>
                            <input
                                id="yearsFilterInputMin"
                                type="text"
                                placeholder="Min let"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                            <input
                                id="yearsFilterInputMax"
                                type="text"
                                placeholder="Max let"
                                autocomplete={"off"}
                                maxLength={20}>
                            </input>
                        </span>
                        <button
                            class={"filterSubmitBtn noResizeBtn"}
                            onClick={() => rangeFilter("years", "yearsFilterInputMin", "yearsFilterInputMax", keepArrData)}>
                            Potrdi
                        </button>
                    </span> :
                    <></>
                }

                {/* FILTER PLAČ */}

                {
                    filter === "pay" ?
                        <span class={"colFlex"}>
                            <span class={"flex rangeBox"}>
                                <input
                                    id="payFilterInputMin"
                                    type="text"
                                    placeholder="Min €"
                                    autocomplete={"off"}
                                    maxLength={20}>
                                </input>
                                <input
                                    id="payFilterInputMax"
                                    type="text"
                                    placeholder="Max €"
                                    autocomplete={"off"}
                                    maxLength={20}>
                                </input>
                            </span>
                            <button
                                class={"filterSubmitBtn noResizeBtn"}
                                onClick={() => rangeFilter("pay", "payFilterInputMin", "payFilterInputMax", keepArrData)}>
                                Potrdi
                            </button>
                        </span> :
                        <></>
                }

                {filter === "school" ?
                    <button
                        class={"dataBtn"}
                        onClick={() => remoteDataType("schoolTier")}>
                        {shownData[filter] ?
                            `Izloči stopnjo izobrazbe` :
                            `Vključi stopnjo izobrazbe`
                        }
                    </button> :
                    <></>}

                <button
                    class={"dataBtn"}
                    onClick={() => remoteDataType(filter)}>
                    {shownData[filter] ?
                        `Skrij iz seznama ${filterWordSwitch(filter)}` :
                        `Pokaži v seznamu ${filterWordSwitch(filter)}`}
                </button>

                {/* ENOSTAVNO FILTRIRANJE ALI KOMBINACIJA FILTROV */}
                {/* + POSEBNOSTI */}

                <button
                    class={"filterCombinationBox flex"}
                    onClick={() => setKeepArrData(!keepArrData)}>
                    Kombinirano filtriranje
                    {keepArrData ?
                        <img class="filterCombinationIcon" src="../../public/No.svg" /> :
                        <img class="filterCombinationIcon" src="../../public/Yes.svg" />}
                </button>

                {/* RESET BTN */}

                <button
                    id="filterResetBtn"
                    class={"noResizeBtn"}
                    onClick={() => {
                        setShownData(defaultFilter);
                        setData(sortBackward("id", backup));
                    }}>
                    Obnovi seznam
                </button>

            </div >
        </div >
    ) : <></>
}