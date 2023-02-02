import dotenv from "dotenv";
dotenv.config({ path: ".env" });

type configProp = {
    nodeEnv: string;
    app: { host: string; port: number };
    db: {
        dialect: string;
        user: string;
        pass: string;
        host: string;
        port: number;
        name: string;
    };
};

class Config {
    private readonly nodeEnv: string;
    private readonly appHost: string;
    private readonly appPort: number;
    private readonly dbDialect: string;
    private readonly dbUser: string;
    private readonly dbPass: string;
    private readonly dbHost: string;
    private readonly dbPort: number;
    private readonly dbName: string;

    public config: configProp;

    constructor(variable: any) {
        this.nodeEnv = variable.NODE_ENV;
        this.appHost = variable.APP_HOST;
        this.appPort = Number(variable.APP_PORT);
        this.dbDialect = variable.DB_DIALECT;
        this.dbUser = variable.DB_USER;
        this.dbPass = variable.DB_PASS;
        this.dbHost = variable.DB_HOST;
        this.dbPort = Number(variable.DB_PORT);
        this.dbName = variable.DB_NAME;

        this.config = this.createConfig();
    }

    createConfig(): configProp {
        return {
            nodeEnv: this.nodeEnv,
            app: {
                host: this.appHost,
                port: this.appPort,
            },
            db: {
                dialect: this.dbDialect,
                user: this.dbUser,
                pass: this.dbPass,
                host: this.dbHost,
                port: this.dbPort,
                name: this.dbName,
            },
        };
    }
}
export default new Config(process.env).config;
