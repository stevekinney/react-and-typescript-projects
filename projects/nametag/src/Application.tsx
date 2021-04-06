const NameTag = () => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>[Your Name Here]</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag />;

export default Application;
