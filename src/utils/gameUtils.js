export const pullGames = async (gametitle, releasedate, summary, agerating, cover) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}getGames`, {
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

export const pullPlatform = async (platform) => {
    try {
        const response = await fetch( `${process.env.REACT_APP_REST_API}getPlatform`, {
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