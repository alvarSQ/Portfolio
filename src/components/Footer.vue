<template>
  <footer class="footer">
    <div class="footer_wrapper">
      <MenuTable />
      <div class="contacts">
        <div class="cell">
          <a href="https://github.com/alvarSQ" target="_blank" rel="nofollow noopener">github.com/alvarSQ</a>
        </div>
        <div class="cell">
          <a href="https://perm.hh.ru/resume/ed109771ff037109f30039ed1f3143476c6d36" target="_blank"
            rel="nofollow noopener">Резюме на hh.ru</a>
        </div>
        <div class="cell">
          <a href="mailto:yarik77@list.ru">yarik77@list.ru</a>
        </div>
        <BlockSocialIcon class="horizontal" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import MenuTable from "@/components/UI/menuTable.vue";
import BlockSocialIcon from "@/components/UI/blockSocialIcon.vue";
</script>

<style lang="scss">
footer {
  padding-bottom: 46px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.footer_wrapper {
  max-width: 1200px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }
}

.contacts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 65px);
  }
}

.horizontal {
  display: flex;
  flex-direction: row;
  .cell_social {
    @media (max-width: 980px) {
      width: 100%;
    }
  }
}
</style>
