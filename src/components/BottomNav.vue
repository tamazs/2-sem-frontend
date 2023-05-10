<template>
    <section class="bottom-nav">
        <ul>
            <li>
                <img src="../assets/icon-eye.svg" alt="Eye icon">
                <h3 class="bottom-nav-tooltip">
                    <span class="tooltip-arrow"></span>
                    Members of project
                </h3>
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
}

li {
    display: inline-block;
    position: relative;
    width: 7rem;
    padding: 0.2rem;
    list-style: none;
    bottom: 2rem;
    margin-right: 2rem;
    margin-left: 2rem;
}

.bottom-nav-tooltip {
    display: none;
    position: absolute;
    width: 100%;
    width: max-content;
    bottom: 9rem;
    left: 50%;
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
</style>