'use strict';

const {Command} = require(`commander`);
const {cli} = require(`./cli/index`);

const program = new Command();

program
  .option('-v --version', 'вывести номер версии приложения')
  .option('-h, --help', 'получить справку')
  .option('-g, --generate <count>', 'сформировать файл mocks.json')

program.parse(process.argv);

const options = program.opts();
Object.keys(program.opts())
  .forEach(key => cli[key].run(options[key]))
