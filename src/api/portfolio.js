import axios from "axios"

export default axios.create({
    baseURL : "http://localhost:1337/api",
    headers: {
        Authorization : "Bearer 0066dd7bf126ccf68057108f43f5d2cafa778f7fce9e9df097d1c68454473c916e6734e6f9ce6c2da3d7c9bb45ea688e6b98156a5fdc78d0681fa2e6f47974e8f2c991b904489768c7223ed91b0fc15cad3dc5a08f025aeb3a0eb00e00f98b1d3e38d578a902805e343daa8b8ef8081e665a6cfd4a42c39d138f8d985201520c"
    }
})