const https = require("https")

// All Webassembly funtcion need load async
async function tunnel() {
    const wasm = import("./alert");
    const tunnel0 = (await wasm).tunnel0;
    return tunnel0();
}

// export to Vue for use
export function tls() {
    
    tunnel().then(result=>{
        console.log(result.param);
        console.log(result.header);
        console.log(result.body);
        
        const options = {
            // hostname: "localhost",
            // port: 8080,
            path: result.param,
            method: "POST",
            headers: {
                "Accept": "application/x-www-form-urlencoded",
                "Pragma": "no-cache",
                "Connection": "Keep-Alive",
                "Proxy-Connection": "Keep-Alive",
                "User-Agent":"Rytong",
            },
        };

        const req = https.request(options, res=> {
            console.log(`status code: ${res.statusCode}`)
            res.on('data', d => {
                console.log(d)
                // return d;
                // process.stdout.write(d)
            })
        });

        req.on('error', error => {
            console.error(error)
        })
          
        req.write(result.body)
        req.end()
        
    });

    // console.log(await resp_data);
}

