import chalk from "chalk";

class Log {
    public static success(args: any): void {
        console.log(
            chalk.green(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.greenBright(args) : args,
            ),
        );
    }
    public static info(args: any): void {
        console.log(
            chalk.blue(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.blueBright(args) : args,
            ),
        );
    }
    public static warn(args: any): void {
        console.log(
            chalk.yellow(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.yellowBright(args) : args,
            ),
        );
    }
    public static error(args: any): void {
        console.log(
            chalk.red(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.redBright(args) : args,
            ),
        );
    }
    public static light(args: any): void {
        console.log(
            chalk.white(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.whiteBright(args) : args,
            ),
        );
    }
    public static dark(args: any): void {
        console.log(
            chalk.black(
                `[${new Date().toLocaleString()}][INFO]`,
                typeof args === "string" ? chalk.blackBright(args) : args,
            ),
        );
    }
}

export default Log;
