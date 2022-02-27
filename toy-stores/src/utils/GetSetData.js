const setLocalStorageData = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

const getLocalStorageData = (key) => {
    JSON.parse(localStorage.getItem(key));
}

export default { setLocalStorageData, getLocalStorageData}