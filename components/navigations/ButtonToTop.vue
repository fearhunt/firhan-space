<template>
  <button ref="btnFlightToTop" @click="flightToTop()" class="fixed w-8 h-16 bottom-4 right-6 transition-all ease-in-out opacity-0">
    <img src="~/assets/img/navigation/rocket.png" alt="Go to Top" />
  </button>
</template>

<script setup lang="ts">
  const isFlight = ref(false);
  const docPosY = ref(0);
  const btnFlightToTop = ref<HTMLElement | null>(null);
  const defaultRotationDeg = ref(20);

  const prepareToFlight = () => {
    btnFlightToTop.value.style.transitionDuration = "100ms";

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        btnFlightToTop.value.style.transform = `rotate(${defaultRotationDeg.value - (5 * i)}deg)`;
      }, 100);

      setTimeout(() => {
        btnFlightToTop.value.style.transform = `rotate(-${defaultRotationDeg.value - (5 * i)}deg)`;
      }, 100);
    }
  };

  const flightToTop = () => {
    isFlight.value = true;

    prepareToFlight();

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1000);
  };

  const onScroll = () => {
    docPosY.value = document.documentElement.scrollTop;

    if (isFlight.value) {
      btnFlightToTop.value.style.top = `${docPosY.value - 100}px`;
      btnFlightToTop.value.style.bottom = null;

      if (docPosY.value == 0) {
        isFlight.value = false;
        btnFlightToTop.value.style.opacity = 0;
        btnFlightToTop.value.style.transitionDuration = "350ms";
      }
    } else {
      btnFlightToTop.value.style.top = null;
      btnFlightToTop.value.style.bottom = "1rem";

      if (docPosY.value < 150) btnFlightToTop.value.style.opacity = 0;
      else btnFlightToTop.value.style.opacity = 1;
    }
  };

  onMounted(() => window.addEventListener("scroll", onScroll, true));

  onBeforeUnmount(() => window.removeEventListener("scroll", onScroll, true));
</script>
