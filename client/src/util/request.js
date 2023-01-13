/* For sending requests to the server */

/** GET */
export const Get = async (url) => {
    const res = await fetch(url);
    const _json = res.json();
    return _json;
}

/** POST */
export const Post = async (url, data) => {
    const payload = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    const res = await fetch(url, payload);
    const _json = res.json();
    return _json;
}

/** DELETE */
export const Delete = async(url, id) => {
    const payload = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }    
    }
    const res = await fetch(`url/${id}`, payload);
    const _json = res.json();
    return _json;
}

/** PATCH */
export const Patch = async (url, data) => {
    const payload = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetch(url, payload);
    const _json = res.json();
    return _json;
}