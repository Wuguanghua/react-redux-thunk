/**
 * Create By Guanghua on 2018/3/15.
 */


export default function request(url, method, body) {

    const init = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };

    if (method !== 'GET') {
        init.body = JSON.stringify(body);
    }

    return fetch(url, init)
        .then(val => {
            console.log('val', val);
            const result = val.json();
            return result;
        })
        // .catch(err => {
        //     console.error('###ERROR###', err);
        // });
}

