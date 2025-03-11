import { Link } from "preact-router/match"

import usePlacanStore from "../usePlacanStore";
import useLocalStorage from "../utils/useLocalStorage";

import "./onas.css";

export default function ONas() {

    const { formSubmitedTimes, updateFormSubmitedTimes } = usePlacanStore();
    const { storeData } = useLocalStorage();

    return (<>

        <nav class={"nav colFlex"}>
            <Link
                href="/">
                <button class={"navBtn"}>Nazaj</button>
            </Link>
        </nav>

        <h2 class={"defMouse"}>
            Piratski program
        </h2>

        <section
            id="explainBox"
            class={"defMouse"}>
            <p>ePlačan je namenjen spodbujanju deljenja informacij o prejetem plačilu za opravljeno delo, še posebno med mladimi.</p>
            <p>Informirani smo sposobnejši oceniti stanje na trgu dela, recimo če smo za delo ustrezno plačani.</p>
            <p>Boljša informiranost spodbuja konkurenčno vedenje in je v korist tako delavcev kot delodajalcev.</p>
            <p>Delavcev, ker dobijo nujne informacije o oceni vrednosti svojega dela na trgu dela.</p>
            <p>Delodajalcev, ker s ponudbo nadstandardnih pogojev lažje prepričajo delavce v vrednost svoje ponudbe.</p>
            <p>Spodbujamo delavce in delodajalce, spodbujamo konkurenco, spodbujamo dobre delovne prakse.</p>
        </section>

        <section
            id="promoBox"
            class={"flex"}>
            <a
                class={"colFlex"}
                tabIndex={0}>
                <img
                    class="logo"
                    src="ePlacan_Logo.png"
                    alt="ePlačan Logo" />
            </a>
            <a class={"colFlex"}
                tabIndex={0}
                href={"https://piratskastranka.si"}
                target={"_blanc"}>
                <img
                    class="logo"
                    src="Pirati_znak.png"
                    alt="Piratska stranka Logo" />
            </a>
        </section>

        {/*V ePlačan gumb dodaj funkcijo, naj predvaja kdo je sodeloval v projektu.*/}

        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 10,
                margin: 20,
                border: "3px solid black",
                padding: 15,
            }}>
            <button onClick={() => {
                storeData("formJobDataCollected", 0);
                updateFormSubmitedTimes(0);
            }}>
                Reset btn
            </button>
            <span>
                Število oddanih form:
            </span>
            <span>
                {formSubmitedTimes}
            </span>
        </section>
    </>)
}