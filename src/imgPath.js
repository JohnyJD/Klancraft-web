export function getImgPath(path) {
    let url = new URL(path,
        import.meta.url);
    return url.href;
};

export default getImgPath;