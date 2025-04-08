import languages from "../assets/languages";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function AccordionList() {
    const [active, setActive] = useState(null);

    return (<>
        {languages.map(language => {
            return <>
                <AccordionItem key={language.id} languages={language} actived={active === language.id} onToggle={() => setActive(active === language.id ? null : language.id)} />
            </>
        })}
    </>)
}