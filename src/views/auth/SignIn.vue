<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
    style="background-image: url('media/illustrations/progress-hd.png')"
  >
    <!--begin::Content-->
    <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
      <!--begin::Logo-->
      <router-link to="/" class="mb-12">
        <img alt="Logo" src="media/logos/logo-2-dark.svg" class="h-45px" />
      </router-link>
      <!--end::Logo-->

      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->

          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
              {{ $t('login_title') }}
            </h1>
            <!--end::Title-->
          </div>
          <!--begin::Heading-->
          <div>
            <!--begin::Google link-->
            <a
              href="#"
              class="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
            >
              <img
                alt="Logo"
                src="media/svg/brand-logos/github-1.svg"
                class="h-20px me-3"
              />
              {{ $t('oath_login_github_title') }}
            </a>
            <!--end::Google link-->
          </div>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->

    <!--begin::Footer-->
    <div class="d-flex flex-center flex-column-auto p-10">
      <!--begin::Links-->
      <div class="d-flex align-items-center fw-bold fs-6">
        <a href="#" class="text-muted text-hover-primary px-2">{{ $t('about') }}</a>

        <a href="#" class="text-muted text-hover-primary px-2">{{ $t('contact_us') }}</a>
      </div>
      <!--end::Links-->
    </div>
    <!--end::Footer-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { Actions } from "@/stores/enums/StoreEnums";
import { useBodyStore } from "@/stores/BodyModule";

export default defineComponent({
  name: "sign-in",
  setup() {
    const bodyStore = useBodyStore();
    onMounted(() => {
      bodyStore[Actions.REMOVE_BODY_ATTRIBUTE]({
        qulifiedName: "style"
      });
    });

    bodyStore[Actions.ADD_BODY_ATTRIBUTE]({
      qulifiedName: "style",
      value: "background-image: url(media/patterns/header-bg.jpg)"
    });

    return {};
  }
});
</script>
