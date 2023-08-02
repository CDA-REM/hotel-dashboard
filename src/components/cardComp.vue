<template lang="">
    <div>
        <a-card :title=titre :bordered="false" style="width:300px">
            <p>{{contenu}}</p>
        </a-card>
    </div>
</template>

<script>
export default {
    name: "cardComp",
    props: {
        titre: String,
        contenu: String
    }
}
</script>
<style lang="">
    
</style>