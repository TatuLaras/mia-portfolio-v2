import './styles/Table.css';

interface TableItem {
    left: string;
    right: string;
}

interface Props {
    items: TableItem[];
}

export default function Table({ items }: Props) {
    return (
        <div className="table">
            {items.map((item, i) => (
                <div className="row" key={i}>
                    <span>{item.left}</span>
                    <span>{item.right}</span>
                </div>
            ))}
        </div>
    );
}
