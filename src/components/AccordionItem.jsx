export default function AccordionItem({ languages }) {
    return (<>
        {languages.map(language => <button>{language.title}</button>)}

    </>)
}