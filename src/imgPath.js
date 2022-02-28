export async function getImgPath(file, section) {
    let mod
    switch (section) {
        case 'streamers':
            mod = await
            import (`./assets/streamers/${file}.jpg`)
            return mod.default
        case 'team':
            mod = await
            import (`./assets/team/${file}.png`)
            return mod.default
    }
}

export default getImgPath;