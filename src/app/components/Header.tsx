import { RegionForm } from "./RegionForm";
import { YearForm } from "./YearForm";

type HeaderProps = {
  year: number;
  handleYearChange: (value: number) => void;
  region: string;
  handleRegionChange: (value: string) => void;
};

export const Header = ({
  year,
  handleYearChange,
  region,
  handleRegionChange,
}: HeaderProps) => {
  return (
    <header>
      <YearForm year={year} handleYearChange={handleYearChange} />

      <RegionForm region={region} handleRegionChange={handleRegionChange} />
    </header>
  );
};
