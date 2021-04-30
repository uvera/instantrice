import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ThemeData } from "./index";
import GridItem from "./GridItem";
import { customColors } from "../../util/theme";

const ThemeGrid = () => {
  const [themeData, setThemeData] = useState<ThemeData[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/uvera/instantRICE-resources/main/themes.json"
    )
      .then((r) => r.json())
      .then((r) => setThemeData(r))
      .catch(console.log);
  }, []);

  return (
    <SimpleGrid
      columns={[2, 3]}
      spacing="40px"
      width="full"
      borderWidth="2px"
      borderColor={customColors.borderBrand}
      padding={3}
      height="full"
    >
      {themeData.map((e: ThemeData, i) => (
        <GridItem data={e} key={i} />
      ))}
    </SimpleGrid>
  );
};

export default ThemeGrid;
