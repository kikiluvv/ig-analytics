import Upload from "../components/followBack/Upload";
import Results from "../components/followBack/Results";
import { useState } from "react";
import "./styles/followback.css";
import Scraper from "../components/followBack/Scraper";

export default function FollowBack() {
    const [hasData, setHasData] = useState(
        !!localStorage.getItem("followers") && !!localStorage.getItem("following")
    );

    return (
        <div className="followback-page">
            <h1 className="followback-title">📊 Follower Analyzer</h1>
            <p className="followback-desc">
                Upload your Instagram data export and discover who’s really keeping up with you.
            </p>

            <div className="followback-content">
                {!hasData ? (
                    <Upload onUploaded={() => setHasData(true)} />
                ) : (
                    <Results />
                )}
            </div>

            <div className="followback-content">
                <Scraper />
            </div>
        </div>
    );
}
