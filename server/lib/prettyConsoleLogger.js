import chalk from 'chalk'

class PrettyConsoleLogger {
  constructor(prefix, color){
    this.prefix = prefix
    this.color = color
  }
  log(msg){
    console.log(chalk[this.color](`[${this.prefix}] ${msg}`))
  }
}

export default PrettyConsoleLogger
