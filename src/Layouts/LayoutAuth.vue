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
            rgba(37, 29, 26, 1) 0%,
            rgba(92, 30, 10, 1) 35%,
            rgba(60, 27, 27, 1) 100%
        );
    }
</style>
