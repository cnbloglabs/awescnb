<script setup>
import Footer from './Footer.vue'
const pageList = [
    {
        title: '🏠 首页',
        url: '/public/templates/home.html',
    },
    {
        title: '📃 博文详情页 - Markdown',
        url: '/public/templates/post.html',
    },
    {
        title: '📜 博文详情页 - 富文本',
        url: '/public/templates/post1.html',
    },
    {
        title: '📑 标签博文列表',
        url: '/public/templates/catalog.html',
    },
    {
        title: '📂 随笔分类',
        url: '/public/templates/category.html',
    },
    {
        title: '📷 相册',
        url: '/public/templates/photos.html',
    },
    {
        title: '🔍 相册 - 照片预览',
        url: '/public/templates/photoview.html',
    },
    {
        title: '📚 随笔档案博文列表',
        url: '/public/templates/postarchive.html',
    },
    {
        title: '🔖 标签列表',
        url: '/public/templates/postarchive.html',
    },
]
</script>

<template>
    <div class="container">
        <h1 class="hello">🌊 Hello Awescnb</h1>
        <div class="page-list">
            <a :href="page.url" v-for="page in pageList" :key="page.title">
                <div>{{ page.title }}</div>
            </a>
        </div>
    </div>
    <Footer></Footer>
</template>

<style scoped lang="scss">
.container {
    width: 500px;
    margin: 80px auto 0;
}
.hello {
    text-align: center;
    font-size: 32px;
    color: #333;
}
.page-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 40px 0 0 0;
    & > a {
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        color: #555;
        &:hover {
            color: darkblue;
            background-color: #f3f2f2;
        }
    }
}
</style>
