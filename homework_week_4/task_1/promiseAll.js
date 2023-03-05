// Task 1: Custom Promise.all

function promiseAll(promises) {

    return new Promise((resolve, reject) => {
        const promiseResults = new Array(promises.length);
        let count = 0;

        // Loop iterates over the input promises and attaches a then and a catch method to the current promise.
        // When it resolves in either way, the corresponding method will call the promise with the fulfilled value.
        for (let i = 0; i < promises.length; i++) {
            promises[i]
                .then((result) => {
                    promiseResults[i] = result;
                    count++;

                    // If this is the last promise to be resolved...
                    if (count === promises.length) {
                        resolve(promiseResults);
                    }
                })
                .catch((error) => {

                    // At any point if the promise is rejected, the promiseAll is rejected with the error.
                    reject(error);
                });
        }
    });
}

async function promiseAllTest(shouldFulfill) {
    const firstPromise = Promise.resolve('This is a test');
    const secondPromise = new Promise((resolve) => setTimeout(() => resolve('And it should...'), 1000));
    const thirdPromise = shouldFulfill ? Promise.resolve('Pass') : Promise.reject(new Error('Promise Rejected'));

    const results = await promiseAll([firstPromise, secondPromise, thirdPromise]);
    console.log(results);
}

promiseAllTest(true);