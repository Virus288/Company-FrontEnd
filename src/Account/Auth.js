import backend from "../Links.json";

const RequireAuth = async () => {
    try {
        const res = await fetch(`${backend.backend}/token`, {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        return data.type !== 1;
    }
    catch (e) {
        console.log(e)
    }
}

export {
    RequireAuth
}
