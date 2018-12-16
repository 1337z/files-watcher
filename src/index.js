const fs = require('fs')
const chalk = require('chalk')

const log = console.log

exports.watch = args => {
  fs.watch('./', { recursive: true }, (event, filename) => {
    if (!filename) log.error('No filename (?)')

    if (event == 'rename') log.rename(filename)
    else if (event == 'change') log.change(filename)
  })
}

log.error = message => {
  log(chalk.red('Error: ') + message)
}

log.change = filename => {
  log(`${chalk.green('Change:')} ${filename}`)
}

log.rename = filename => {
  log(`${chalk.magenta('Rename:')} ${filename}`)
}
