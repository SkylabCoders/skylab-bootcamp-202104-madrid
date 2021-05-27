const func = () => {
    console.log('Hello after 4...')
};

setTimeout(func, 4 * 1000, func, 8000)


