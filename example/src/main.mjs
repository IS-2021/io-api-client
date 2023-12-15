import {getUserData, updateRanking} from "greengame-api-client";

class ClassUsageExample {
    constructor() {
    }

    async getUserData() {
        // API client functions can be called inside async methods
        const userData = await getUserData();
        console.log(userData);
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
});
