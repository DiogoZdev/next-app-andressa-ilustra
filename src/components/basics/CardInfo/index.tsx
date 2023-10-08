import s from "./style.module.scss";

interface CardInfoProps {
    label: string,
    text: string,
}

export const CardInfo = (p: CardInfoProps) => {

    return <div className={s.card}>
        <h2 className={s.label}>{p.label}</h2>
        {p.text.split('/').map((paragraph: string) => (
            <p key={paragraph} className={s.paragraph}>{paragraph}</p>
        ))}
    </div>
}