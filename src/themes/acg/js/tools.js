// There are some plugins for theme acg

export default {
    // 获取一个随机image url
    getRandomImgUrl() {
        const repositoriesUrl = urls.repositories.package + '/assets/images/acg/';
        const random = Math.floor(Math.random() * 78);
        const url = `${repositoriesUrl + random}.jpg`;
        return url;
    }
}

