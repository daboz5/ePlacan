import { Link } from "preact-router/match"

import Filter from "../components/Filter";
import Table from "../components/Table";

import "./EPlacan.css";

export default function EPlacan() {

    return (<>

        <nav class={"nav colFlex"}>
            <Link
                href="/obrazec">
                <button id="shareInfoBtn">
                    Želim deliti svoje stanje!
                </button>
            </Link>
            <Link
                href="/piratska-stranka">
                <button class={"navBtn"}>
                    Piratski program
                </button>
            </Link>
        </nav>

        <Filter />

        <Table />

    </>)
}