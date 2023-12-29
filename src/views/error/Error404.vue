<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url('media/svg/illustrations/progress.svg')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-20">
      <div class="pt-lg-10">
        <h1 class="fw-bolder fs-4x text-gray-700 mb-10">{{ $t('404') }}</h1>

        <div class="fw-bold fs-3 text-gray-400 mb-15">
          {{ $t('404_page') }}
        </div>

        <div class="text-center">
          <router-link to="/" class="btn btn-lg btn-primary fw-bolder">
            {{ $t('go-to-home') }}
          </router-link>
        </div>
      </div>
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <FooterUs></FooterUs>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FooterUs from '@/layout/footer/Footer-Us.vue';

export default defineComponent({
  name: "error-404",
  components: {
    FooterUs
  }
});
</script>
