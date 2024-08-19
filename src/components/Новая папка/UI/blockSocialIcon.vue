<template>
  <div>
    <a href="https://wa.me/79223275348" target="_blank" rel="nofollow noopener" aria-label="WhatsApp" title="WhatsApp"
      class="cell_social">
      <IconWhatsapp class="sm" />
    </a>
    <a href="viber://chat?number=%2B79223275348" target="_blank" rel="nofollow" aria-label="Viber" title="Viber"
      class="cell_social">
      <IconViber class="sm" />
    </a>
    <a href="https://t.me/serveramru" target="_blank" rel="nofollow noopener" aria-label="Telegram" title="Telegram"
      class="cell_social">
      <IconTelegram class="sm" />
    </a>
  </div>
</template>

<script setup>
import IconWhatsapp from '@/components/svg/whatsapp.vue'
import IconViber from '@/components/svg/viber.vue'
import IconTelegram from '@/components/svg/telegram.vue'
</script>

<style lang="scss">
.cell_social {
  border: 2px solid white;
  margin: 0 -2px -2px 0;
  width: 66px;
  height: 66px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .sm {
    fill: #48b322;
  }
}
</style>>
