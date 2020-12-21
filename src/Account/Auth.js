import backend from "../Links.json";

const RequireAuth = async () => {
    try {
        const res = await fetch(`${backend.backend}/checkiflogged`, {
            method: "POST",
            body: JSON.stringify({ token: sessionStorage.jwt} ),
            headers: { 'Content-Type': 'application/json'}
        });
        const data = await res.json();
        return (data["verified"])
    }
    catch (e) {
        console.log(e)
    }
}

const CheckIfAuth = () => {
        return !!sessionStorage.jwt;

}

export {
    RequireAuth,
    CheckIfAuth
}