export const getKeyByValue = (options: { obj: any; value: any }) => {
    return Object.keys(options.obj).find(
        (key) => options.obj[key] === options.value
    );
};
