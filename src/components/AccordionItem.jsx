export default function AccordionItem({ title, onToggle }) {
    return (<>
        <button onClick={onToggle} className="btn btn-primary">{title}</button>
    </>
    );
}