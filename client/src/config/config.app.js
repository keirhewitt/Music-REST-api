export const config = {
    "test": {
        "header": {

            "headers": { "apiKey": import.meta.env.VITE_API_KEY }
        },
        "body": {
            "data": {
                "email": "keir11@hotmail.com",
                "password": "testpass",
            },
        },
        "Authorization": {}
    }
}