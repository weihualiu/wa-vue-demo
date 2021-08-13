// All Webassembly funtcion need load async
async function asyn_tunnel(data) {
    const wasm = import("./alert");
    const tunnel0 = (await wasm).tunnel;
    return tunnel0(data);
}

// export to Vue for use
export async function tls() {
    const wasm = import("./alert");
    const JRData = (await wasm).JRData;
    
    let data = JRData.new("memory", "data");
    return asyn_tunnel(data);
}
