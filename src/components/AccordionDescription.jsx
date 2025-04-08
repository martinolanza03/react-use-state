export default function AccordionDescription({ languages, actived }) {
    if (actived === null) {
        return <p>Nessun Linguaggio selezionato</p>
    }

    return actived && <>
        <p>{languages[actived - 1].title}</p>
        <p>{languages[actived - 1].description}</p>
    </>;
}