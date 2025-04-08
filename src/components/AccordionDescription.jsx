export default function AccordionDescription({ languages, actived }) {
    return actived && <>
        <p>{languages[actived - 1].title}</p>
        <p>{languages[actived - 1].description}</p>
    </>;
}