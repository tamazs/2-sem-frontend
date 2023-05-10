<template>
    <section class="bottom-nav">
        <ul>
            <li>
                <img src="../assets/icon-eye.svg" alt="Eye icon">
                <h3 class="bottom-nav-tooltip">
                    <span class="tooltip-arrow"></span>
                    See projects
                </h3>
            </li>
            <li style="bottom: 2rem;">
                <img src="../assets/icon-about.svg" style="height: 5rem;" alt="About icon">
                <h3 class="bottom-nav-tooltip">
                    <span class="tooltip-arrow"></span>
                    See members of project
                </h3>
            </li>
            <li>
                <a href="https://www.netflix.com/" target="_blank">
                    <img src="../assets/icon-web.svg" alt="Web icon">
                    <h3 class="bottom-nav-tooltip">
                        <span class="tooltip-arrow"></span>
                        Go have fun, you deserve it.
                    </h3>
                </a>
            </li>
            <li>
                <a href="https://www.youtube.com/watch?v=k4V3Mo61fJM" target="_blank">
                    <img src="../assets/icon-hole.svg" alt="Hole icon">
                    <h3 class="bottom-nav-tooltip">
                        <span class="tooltip-arrow"></span>
                        Only click when sad because of project
                    </h3>
                </a>
            </li>
            <li>
                <img src="../assets/icon-settings.svg" alt="Settings icon">
                <h3 class="bottom-nav-tooltip">
                    <span class="tooltip-arrow"></span>
                    Settings
                </h3>
            </li>
            <li>
                <img src="../assets/icon-bin.svg" alt="Bin icon">
                <h3 class="bottom-nav-tooltip">
                    <span class="tooltip-arrow"></span>
                    Mark as done
                </h3>
            </li>
        </ul>
    </section>
</template>

<script setup>

</script>

<style scoped>
.bottom-nav {
    position: fixed;
    width: 71rem;
    height: 10rem;
    bottom: -1rem;
    left: 50%;
    padding: 0.5rem;
    background-image: url(../assets/icon-table.svg);
    background-size: cover;
    background-position: top;
    border-radius: 8px 8px 0 0;
    transform: translateX(-50%) scale(0.8);
    z-index: 3;
}

ul {
    width: 80%;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    padding-left: 0;
    transform: translateX(2rem);
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

li {
    display: inline-block;
    position: relative;
    width: 7rem;
    padding: 0.2rem;
    list-style: none;
    bottom: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
}

.bottom-nav-tooltip {
    display: none;
    position: absolute;
    width: 100%;
    width: max-content;
    bottom: 7rem;
    left: 43%;
    padding: 0.3rem;
    font-size: 1rem;
    text-align: center;
    background-color: white;
    border-radius: 3px;
    transform: translateX(-50%);
}

li:hover .bottom-nav-tooltip {
    display: block;
}

.tooltip-arrow {
    position: absolute;
    width: 1.3rem;
    height: 1.3rem;
    top: 100%;
    left: 50%;
    margin-left: -12.5px;
    margin-top: -14px;
    background-color: white;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    z-index: -1;
}

img {
    height: 8rem;
}

a {
    text-decoration: none;
    color: black;
}
</style>