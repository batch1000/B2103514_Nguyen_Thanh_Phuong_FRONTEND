import axios from "axios";
const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};
export default (baseURL) => {
    console.log("[LOG] Khởi tạo axios với baseURL:", baseURL);
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};
