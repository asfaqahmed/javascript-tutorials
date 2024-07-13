function asyncTask(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Task completed successfully!");
            } else {
                reject("Task failed.");
            }
        }, 1000);
    });
}

asyncTask(true)
    .then(result => {
        console.log(result);
        return asyncTask(false);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
