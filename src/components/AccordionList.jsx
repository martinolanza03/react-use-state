import languages from "../assets/languages";
import AccordionItem from "./AccordionItem";
import AccordionDescription from "./AccordionDescription";
import { useState } from "react";

export default function AccordionList() {
    const [active, setActive] = useState(null);

    return (<div >
        <div className="container d-flex flex-row gap-3 mb-5 mt-5">
            {languages.map(language => {
                return <>
                    <AccordionItem key={language.id} title={language.title} actived={active === language.id} onToggle={() => setActive(active === language.id ? null : language.id)} />
                </>
            }
            )}
        </div>
        <div className="container card">
            <AccordionDescription languages={languages} actived={active} />
        </div>
    </div>)
}