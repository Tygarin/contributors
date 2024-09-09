type HeaderProps = Readonly<{
  name: string;
}>;

export const Region = ({ name }: HeaderProps) => {
  return (
    <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
      Region: {name}
    </h1>
  );
};
