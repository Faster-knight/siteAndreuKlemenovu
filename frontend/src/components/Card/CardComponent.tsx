import { useState } from 'react';
import './CardComponent.css';

type Props = {
    idCard: number,
    title: string,
    image: Blob,
    status: {
        cur: number,
        all: number
    }
    taskComment: string,
    taskComment2: string
}

function CardComponent(props: Props) {
    const [view, setView] = useState<boolean>(false)
    const [data] = useState<Props>(props);
    const clickEvent = () => {
        setView(!view);
    }
    return (
        <div className={`CardComponent${view ? "show" : ""}`} onClick={clickEvent}>
            <div className="CardComponent-title"></div>
            <p className="CardComponent-status">Статус {data.status.cur}/{data.status.all}</p>
            <button className="CardComponent-view">{view ? "Закрыть" : "Открыть"}</button>
            <div className="CardComponent-hide">
                <p>{data.taskComment}</p>
                <p>{data.taskComment2}</p>
            </div>
        </div>
    )
}

export default CardComponent;