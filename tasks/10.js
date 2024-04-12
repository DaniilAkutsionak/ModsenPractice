function randomDelayPromise() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        console.log(`Сгенерированное число: ${randomNumber}`);

        setTimeout(() => {
            if (randomNumber <= 5) {
                resolve(`Промис выполнен успешно с числом ${randomNumber}`);
            } else {
                reject(new Error(`Промис выполнен с ошибкой, сгенерированное число: ${randomNumber}`));
            }
        }, randomNumber * 1000);
    });
}

randomDelayPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
