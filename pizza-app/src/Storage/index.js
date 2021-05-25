class Storage {
    setItem(key,value){
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key){
        return window.localStorage.getItem(key);
    }

    removeItem(){
        window.localStorage.removeItem(key);
    }
};

export const storage = new Storage();