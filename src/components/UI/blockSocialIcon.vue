<template>
  <div>
    <a
      href="https://github.com/alvarSQ"
      target="_blank"
      rel="nofollow noopener"
      aria-label="Githab"
      title="Githab"
      class="cell_social"
    >
      <IconGithab class="sm" />
    </a>
    <a
      href="https://perm.hh.ru/resume/ed109771ff037109f30039ed1f3143476c6d36"
      target="_blank"
      rel="nofollow"
      aria-label="HeadHunter"
      title="HeadHunter"
      class="cell_social"
    >
      <IconHh class="sm" />
    </a>
    <a
      href="mailto:yarik77@list.ru"
      target="_blank"
      rel="nofollow noopener"
      aria-label="Mail"
      title="yarik77@list.ru"
      class="cell_social"
    >
      <IconMail class="sm" />
    </a>
  </div>
</template>

<script setup>
import IconGithab from "@/components/svg/githab.vue";
import IconHh from "@/components/svg/hh.vue";
import IconMail from "@/components/svg/mail.vue";
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
</style>
>
