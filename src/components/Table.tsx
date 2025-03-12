import { useEffect } from "preact/hooks";
import { Data } from "../type"

import usePlacanStore from "../usePlacanStore";
import useFilter from "../utils/useFilter";
import useBasic from "../utils/useBasic";

import LongTable from "./LongTable";
import WideTable from "./WideTable";
import Filter from "./Filter";

import "./table.css";

export default function Table() {

    const fakeData: Data[] = [
        {
            id: 1,
            ip: 1000569,
            job: "Scientist",
            school: "Biotehniška",
            schoolTier: 4,
            years: 3,
            hours: 40,
            pay: 40000
        },
        {
            id: 2,
            ip: 1010569,
            job: "Plummer",
            school: "Strojna",
            schoolTier: 4,
            years: 1,
            hours: 40,
            pay: 30000
        },
        {
            id: 3,
            ip: 1030569,
            job: "Jogurt tester",
            school: "Splošna gimnazija",
            schoolTier: 2,
            years: 5,
            hours: 20,
            pay: 35000
        },
        {
            id: 4,
            ip: 1000669,
            job: "Clown",
            school: "Ekonomija",
            schoolTier: 3,
            years: 15,
            hours: 40,
            pay: 40000
        },
        {
            id: 5,
            ip: 2000569,
            job: "Store Clerk",
            school: "Biotehniška",
            schoolTier: 5,
            years: 2,
            hours: 40,
            pay: 30000
        },
        {
            id: 6,
            ip: 1000579,
            job: "Actor",
            school: "Tujina - Oxfort",
            schoolTier: 4,
            years: 5,
            hours: 60,
            pay: 70000
        },
    ]

    const {
        backup,
        data,
        setData,
        setBackup,
    } = usePlacanStore();

    const { sortForward, sortBackward } = useFilter();

    useEffect(() => {
        setBackup(sortForward("id", fakeData));
        setData(sortBackward("id", fakeData));
        window.onscroll = function () { scrollFunction() };
    }, []);

    const { moveToTop } = useBasic();

    function scrollFunction() {
        const btn = document.getElementById("upBtn");
        if (btn) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        }
    }

    return (<>

        <Filter />

        <LongTable />

        <WideTable />

        {data.length < 1 ?
            <button
                id="emptyTableBtn"
                onClick={() => setData(sortBackward("id", backup))}>
                Obnovi seznam
            </button> :
            <></>}

        <button
            id="upBtn"
            onClick={() => moveToTop()}>
            Vrh strani
        </button>

    </>)
}