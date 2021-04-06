type ButtonProps = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
};

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false
}: ButtonProps) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
