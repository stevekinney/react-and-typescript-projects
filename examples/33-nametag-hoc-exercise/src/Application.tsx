type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag salutation="Howdy" user={currentUser} />;

export default Application;
