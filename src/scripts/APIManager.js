
const APIManager = {
    getUsers: () => {
        return fetch (`http://localhost:8088/users/`)
            .then(res => res.json())
    },
    getAnyById: (desiredDatabase, id) => {
        return fetch (`http://localhost:8088/${desiredDatabase}/${id}`)
            .then(res => res.json())
    },
    delete: (desiredDatabase, objectId) => {
        return fetch(`http://127.0.0.1:8088/${desiredDatabase}/${objectId}`, {
                method: "DELETE"
        })
   },
   Post: (desiredDatabase, objectToPost) => {
    return fetch(`http://localhost:8088/${desiredDatabase}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objectToPost)
    })
        .then(res => res.json())
   },
    Put:(desiredDatabase, objectId, editedObject) => {
        return fetch(`http://localhost:8088/${desiredDatabase}/${objectId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedObject)
        })
        .then(res => res.json())
    },
    fetchWithExpandedUserInfo: (desiredDatabase, userId) => {
        return fetch (`http://localhost:8088/${desiredDatabase}?_expand=user&userId=${userId}`)
            .then(res => res.json())

    },
    fetchWithExpandedUserInfoNoId: (desiredDatabase) => {
        return fetch (`http://localhost:8088/${desiredDatabase}?_expand=user`)
            .then(res => res.json())

    },
    fetchWithoutUserInfo: (desiredDatabase) => {
        return fetch (`http://localhost:8088/${desiredDatabase}`)
            .then(res => res.json())

    },
    fetchAllEmbedded: (desiredDatabase) => {
        return fetch (`http://localhost:8088/users?_embed=${desiredDatabase}`)
            .then(res => res.json())

    }
}

export default APIManager