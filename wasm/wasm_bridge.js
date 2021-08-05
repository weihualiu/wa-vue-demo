// const https = require("https")

// All Webassembly funtcion need load async
async function jstunnel(data) {
    const wasm = import("./alert");
    const tunnel0 = (await wasm).tunnel;
    return tunnel0(data);
}

// export to Vue for use
export async function tls() {

    const wasm = import("./alert");
    const JRData = (await wasm).JRData;
    
    let data = JRData.new("memory", "data");
    jstunnel(data).then(result=>{
        // console.log(result.param);
        // console.log(result.header);
        // console.log(result.body);
        
        // const options = {
        //     // hostname: "localhost",
        //     // port: 8080,
        //     path: result.param,
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/x-www-form-urlencoded",
        //         "Pragma": "no-cache",
        //         "Connection": "Keep-Alive",
        //         "Proxy-Connection": "Keep-Alive",
        //         "User-Agent":"Rytong",
        //     },
        // };

        // const req = https.request(options, res=> {
        //     console.log(`status code: ${res.statusCode}`)
        //     res.on('data', d => {
        //         console.log(d)
        //     })
        // });

        // req.on('error', error => {
        //     console.error(error)
        // })
          
        // req.write(result.body)
        // req.end()
        
    });

    // console.log(await resp_data);
}
