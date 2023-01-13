export const get = async (url) => {
    const res = await fetch(url);
    const _json = res.json();
    return _json;
}

export const post = async (url, data) => {
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data);
    }

    const res = await fetch(url, data);
    const _json = res.json();
    return _json;
}