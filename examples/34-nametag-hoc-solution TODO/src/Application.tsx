type NameTagProps = {
  name: string;
  greeting?: string;
};

const NameTag = ({ name, greeting = 'Hello' }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{greeting}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="Steve" greeting="Salutations" />;

export default Application;
