<template>
    <div>
        <CRow v-if="!pageLoading">
            <CCol xl="6" class="left">
                <SecurityAuthority></SecurityAuthority>
            </CCol>
            <CCol xl="6">
                <SecurityDevice></SecurityDevice>
                <SecurityData></SecurityData>
            </CCol>
        </CRow>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import {CommonModule} from '@/store/CommonModule'
    import SecurityAuthority from '@/views/security/SecurityAuthority.vue'
    import SecurityDevice from '@/views/security/SecurityDevice.vue'
    import SecurityData from '@/views/security/SecurityData.vue'

    @Component({
        components: {SecurityData, SecurityDevice, SecurityAuthority}
    })
    export default class Security extends Vue {

        mounted() {
            setTimeout(() => {
                CommonModule.hidePageLoading()
            }, 1000)
        }

        get pageLoading() {
            return CommonModule.pageLoading
        }
    }
</script>

<style lang="stylus" scoped>

</style>