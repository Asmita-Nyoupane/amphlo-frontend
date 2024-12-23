/* eslint-disable @typescript-eslint/no-require-imports */
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer(async (req: any, res: any) => {
        try {
            const parsedUrl = parse(req.url, true);
            const { pathname, query } = parsedUrl;

            if (pathname === "/a") {
                await app.render(req, res, "/a", query);
            } else if (pathname === "/b") {
                await app.render(req, res, "/b", query);
            } else {
                await handle(req, res, parsedUrl);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            res.statusCode = 500;
            res.end("internal server error");
        }
    }).listen(port, (err: any) => {
        if (err) throw err;
        console.log(`> Ready on http://${hostname}:${port}`);
    });
});
