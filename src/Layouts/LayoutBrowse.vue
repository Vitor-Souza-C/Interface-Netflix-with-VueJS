<template>
    <div>
        <div
            class="flex flex-col w-screen h-screen special-bg place-items-center justify-center"
        >
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    .special-bg {
        background: rgb(37, 29, 26);
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 1) 0%,
            rgba(43, 36, 36, 1) 100%,
            rgba(3, 3, 3, 1) 100%
        );
    }
</style>
