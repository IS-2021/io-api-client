import {getUserData, updateRanking, saveGameData, loadGameData} from "greengame-api-client";

class ClassUsageExample {
    constructor() {
    }

    async getUserData() {
        // API client functions can be called inside async methods
        const userData = await getUserData();
        console.log(userData);
    }
}

async function pringGameData(gameId) {
    // const gameData = await loadGameData({ gameId });  // This is the shorter syntax
    const gameData = await loadGameData({ gameId: gameId });
    if (gameData != null) {
        console.log(gameData);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const classUsageExample = new ClassUsageExample();

    const getUserDataButton = document.getElementById("btn-get-user-data");
    const updateRankingButton = document.getElementById("btn-update-ranking");

    getUserDataButton.addEventListener("click", async () => {
        await classUsageExample.getUserData();
    });
    updateRankingButton.addEventListener("click", async () => {
        // Or they can be called just as-is, as long as they're within async functions
        await updateRanking({gameID: 1, score: 100});
    });

    await classUsageExample.getUserData();


    // Data storing example
    // gameData can be anything that can be serialized with JSON.stringify()
    // It can be a complex object
    await saveGameData({
        gameId: 1,
        gameData: {
            unlockedLevel: 1,
            boughtUpgrades: ["freezeGun"],
            stats: {
                enemiesDefeated: {
                    bugs: 42,
                },
            },
        },
    });
    // or just a simple (serializable) value
    const userLastLevel = 2;
    await saveGameData({
        gameId: 5,
        gameData: userLastLevel,
    });

    pringGameData(1);
    pringGameData(5);
});
