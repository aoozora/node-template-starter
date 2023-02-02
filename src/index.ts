import app from "@/app";
import config from "@config/config";
import log from "@library/log";
import http from "http";

const port: number = config.app.port;
const host: string = config.app.host;

class Server {
    private server;

    constructor() {
        this.server = http.createServer(app);
    }

    public listen(port: number, host: string) {
        this.server.listen(port, host, (): void => {
            log.success(`Server is Listening at http://${host}:${port}`);
            log.error(`\n\t press CTRL-C to quit\n`);
        });
    }
}

const server = new Server();
server.listen(port, host);
