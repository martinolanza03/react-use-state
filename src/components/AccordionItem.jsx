export default function AccordionItem({ languages, actived, onToggle }) {
    return (<>
        <button onClick={onToggle}>{languages.title}</button>
        {actived && <>
            <p>{languages.title}</p>
            <p>{languages.description}</p>
        </>
        }

    </>
    );
}