import { useState } from "react";
import Input from "../components/anonStory/Input";
import Results from "../components/anonStory/Results";
import styles from "./styles/anonstory.module.css";

export type Story = {
    id: string;
    type: "image" | "video";
    url: string;
    preview?: string;
    duration?: number;
    postedAt: number;
};

export type StoriesResponse = {
    username: string;
    stories: Story[];
    avatar?: string;
    fetchedAt: string;
    expiresAt: string;
};

export default function AnonStory() {
    const [username, setUsername] = useState("");
    const [data, setData] = useState<StoriesResponse | null>(null);
    const [loading, setLoading] = useState(false);

    async function fetchStories(u: string) {
        setLoading(true);
        try {
            const r = await fetch(`http://localhost:5000/api/stories/${encodeURIComponent(u)}`);
            if (!r.ok) throw new Error(`bad status ${r.status}`);
            const json = (await r.json()) as StoriesResponse;
            setData(json);
        } catch (err) {
            console.error(err);
            setData(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className={styles.container}>
            <h1 className={styles.heading}>anon story viewer</h1>
            <Input
                username={username}
                setUsername={setUsername}
                onSubmit={fetchStories}
                loading={loading}
            />
            <Results data={data} />
        </main>
    );
}
