import "./styles/Home.css";

export default function Home() {
    return (
        <div className="home">
            <div className="home-hero">
                <h1 className="home-title">✨ ig-analytics v0.1 ✨</h1>
                <p className="home-subtitle">
                    Your modular dashboard for Instagram analytics.
                </p>
                <p className="home-subtext">
                    Start by uploading your <code>followers.json</code> and{" "}
                    <code>following.json</code> from Instagram’s data export — see
                    mutuals, unfollowers, and more.
                </p>
                <div className="home-cta">
                    <a href="/follow-back" className="btn">
                        Get Started
                    </a>
                    <a href="/docs" className="btn secondary">
                        Read the Docs
                    </a>
                </div>
            </div>
        </div>
    );
}
