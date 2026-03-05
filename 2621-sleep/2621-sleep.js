/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let succes = true;
            if (succes) {
             resolve(millis)
            } else {
                reject("task faild")
            }
        }, millis);
    })
            return promise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */