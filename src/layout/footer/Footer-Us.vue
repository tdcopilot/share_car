<template>
    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <router-link to="/" class="text-muted text-hover-primary px-2">
            {{ $t('about') }}
        </router-link>
        <router-link to="/" class="text-muted text-hover-primary px-2">
            {{ $t('contact_us') }}
        </router-link>
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "footer-us",
});
</script>