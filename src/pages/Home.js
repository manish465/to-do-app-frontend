const Home = () => {
    return (
        <section className="home page">
            <div className="task-action">
                <button className="add-button">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <section className="tasks not-working">
                <h1>Not Working</h1>
                <article className="task">
                    <h1 className="task-title">My Task</h1>
                    <div className="task-tags">
                        <div className="task-tag">#Work</div>
                        <div className="task-tag">#Morning</div>
                        <div className="task-tag">#First</div>
                        <div className="task-tag">#High</div>
                    </div>
                </article>
            </section>
            <section className="tasks working">
                <h1>Working</h1>
            </section>
            <section className="tasks done">
                <h1>Done</h1>
            </section>
        </section>
    );
};

export default Home;
