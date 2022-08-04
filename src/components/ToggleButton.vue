<template>
    <label for="toggle_button">
        <span>Films</span>
        <span>Tv</span>

        <input type="checkbox" id="toggle_button">
    </label>
</template>

<script>
export default {
    datas() {
        return {
            currentState: false
        }
    }
}
</script>

<template>
    <label for="toggle_button">
        <span v-if="currentState">On</span>
        <span v-if="! currentState">Off</span>

        <input type="checkbox" id="toggle_button">
    </label>
</template>
<script>
export default {
    datas() {
        return {
            currentState: false
        }
    }
}
</script>