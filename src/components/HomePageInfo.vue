<template>
  <div class="wrapper5">
    <div class="container5">
      <div class="line"></div>
      <div class="content5">
        <div class="img5">
          <img src="@/assets/img/sphere3.png" class="w44" />
          <img src="@/assets/img/sphere3(2).png" class="absL20 w44" />
          <img src="@/assets/img/sphere3(3).png" class="absL40 w44" />
        </div>
        <div class="text-blocks5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt unde enim cum voluptate sapiente, incidunt
            sequi quos architecto dolores? Maxime, sint? Cum, omnis impedit. Provident explicabo quod voluptate nobis
            officiis.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.wrapper5 {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: black;
}

.container5 {
  max-width: 1200px;
  margin: 0 auto;
  padding: 170px 0;

  @media (max-width: 1240px) {
    max-width: 940px;
  }

  @media (max-width: 980px) {
    max-width: 620px;
  }

  @media (max-width: 680px) {
    max-width: 460px;
  }

  @media (max-width: 520px) {
    max-width: 300px;
  }
}

.content5 {
  display: flex;
  justify-content: space-between;
  padding-top: 40px;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 30px;
  }
}

.img5 {
  position: relative;
}

.text-blocks5 {
  display: flex;
  gap: 30px;

  p {
    color: white;
    font-size: 15px;
    line-height: 18px;
    max-width: 400px;

    @media (min-width: 980px) and (max-width: 1240px) {
      max-width: 600px;
    }

    @media (max-width: 680px) {
      max-width: 300px;
    }
  }

  @media (max-width: 1240px) {
    flex-direction: column;
  }
}

.w44 {
  width: 44px;
  height: 44px;
}

.absL20 {
  position: absolute;
  left: 20px;
}
</style>
>
