export default function AccordionItem({ languages, actived, onToggle }) {
    return (<div>
        <button onClick={onToggle}>{languages.title}</button>
        {actived && <div>
            <p>{languages.title}</p>
            <p>{languages.description}</p>
        </div>
        }

    </div>
    );
}