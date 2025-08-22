import type { StoriesResponse } from "../../pages/AnonStory";
import styles from "./styles/results.module.css";

type Props = { data: StoriesResponse | null };

export default function Results({ data }: Props) {
    if (!data) return null;
    if (!data.stories.length) {
        return <div className={styles.empty}>no active stories</div>;
    }

    return (
        <section className={styles.wrapper}>
            {data.stories.map((s) => (
                <div key={s.id} className={styles.story}>
                    {s.type === "image" ? (
                        <img src={s.url} alt="" className={styles.media} />
                    ) : (
                        <video src={s.url} controls className={styles.media} />
                    )}
                </div>
            ))}
        </section>
    );
}
