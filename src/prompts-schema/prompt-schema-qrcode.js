import chalk from "chalk";
import prompt from "prompt";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QRCODE"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo QRCode (1 - NORMAL ou 2 - TERMINAL)"
    ),
    pattern: /^[1-2]+/,
    message: chalk.red.bold("Escolha apenas entre 1 e 2"),
    require: true,
  },
];

export default promptSchemaQRCode;
