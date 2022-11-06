<template>
  <div>
    <el-dropdown trigger="click" @command="handleSetLanguage">
      <div class="language--style">
        <svg-icon class-name="language-icon" icon-class="language" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item of languageOptions" :key="item.value" :disabled="locale === item.value" :command="item.value">
            {{ item.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import useAppStore from "@/store/modules/app";
import {LOCALE_OPTIONS} from "../../lang";

const appStore = useAppStore();
const locale = computed(() => appStore.locale);
const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();
const languageOptions = LOCALE_OPTIONS;

function handleSetLanguage(language) {
  proxy.$modal.loading("正在语言，请稍候...");
  appStore.setLocale(language);
  setTimeout("window.location.reload()", 1000);
}
</script>

<style lang='scss' scoped>
.language--style {
  font-size: 18px;
  line-height: 50px;
  padding-right: 7px;
}
</style>