export const pullGames = async (gametitle, releasedate, summary, agerating, cover) => {
    try {
        const response = await fetch( "http://localhost:5001/getGames", {
            method: "POST",
            headers: {
                        "Content-Type": "application/json",
                    }
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}