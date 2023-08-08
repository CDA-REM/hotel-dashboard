<template lang="">
    <div>
        <a-card title="Repas" style="text-align: center;width: fit-content">
            <a-card-grid style="width: 33%; text-align: center" :hoverable="false">
                <h6>PDJ</h6>
                <a-divider />
                <p>12</p>
            </a-card-grid>
            <a-card-grid style="width: 33%; text-align: center" :hoverable="false">
                <h6>DEJ</h6>
                <a-divider />
                <p>5</p>
            </a-card-grid>
            <a-card-grid style="width: 34%; text-align: center" :hoverable="false">
                <h6>DINER</h6>
                <a-divider />
                <p>12</p>
            </a-card-grid>
        </a-card>   
    </div>
</template>
<script>
export default {
    name : 'antCardGrid'
}
</script>

<style>
    h6 { text-align: center; }
</style>