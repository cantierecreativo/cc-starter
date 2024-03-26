import { promises as fsPromises } from "fs";
import { fetchData } from "./utils";

const query = `query ThemeQuery {
  layout {
    theme
    customTheme
    mainColor {
      hex
    }
  }
}`;

(async () => {
  const start = Date.now();
  const { layout } = await fetchData(query);
  const { theme, customTheme, mainColor } = layout;

  const customThemefilePath = "./src/data/customTheme.json";
  await fsPromises.writeFile(
    customThemefilePath,
    JSON.stringify(customTheme, null, 2)
  );

  const color = mainColor.hex;
  const primaryColorfilePath = "./src/data/themeConfig.json";
  await fsPromises.writeFile(
    primaryColorfilePath,
    JSON.stringify({ theme, color }, null, 2)
  );

  const elapsed = Date.now() - start;
  console.info("ELAPSED", elapsed / 1000, "seconds");
})();
