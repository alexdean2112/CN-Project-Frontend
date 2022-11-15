export const pullGames = async (gametitle, releasedate, summary, agerating, cover) => {
    try {
        const response = await fetch( "http://localhost:5001/getGames", {
            method: "POST",
            headers: {
                        "Content-Type": "application/json",
                    }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const pullPlatform = async (platform) => {
    try {
        const response = await fetch( "http://localhost:5001/getPlatform", {
            method: "POST",
            headers: {
                        "Content-Type": "application/json",
                    }
        })
        const data = await response.json()
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const pullTopRated = async (gametitle, releasedate, summary, agerating, cover) => {
    try {
        const response = await fetch( "http://localhost:5001/getTopRated", {
            method: "POST",
            headers: {
                        "Content-Type": "application/json",
                    }
        })
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
