import prompt from "prompt";
import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
    pattern: /^[1-2]+/,
    message: chalk.red.bold("Escolha apenas entre 1 e 2"),
    require: true,
  },
];

export default promptSchemaMain;
