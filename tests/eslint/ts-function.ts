type Props = {
  arg1: string;
};

export const exampleFunction = (props: Props) => {
  const { arg1 } = props;

  console.log(arg1);

  return null;
};
