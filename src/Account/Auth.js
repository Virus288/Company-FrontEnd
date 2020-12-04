const RequireAuth = async () => {
    try {
        const res = await fetch('http://localhost:5000/checkiflogged', {
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

    if(sessionStorage.jwt){
        return true
    } else {
        return false
    }
}

export {
    RequireAuth,
    CheckIfAuth
}