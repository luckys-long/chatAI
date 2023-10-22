<template>
  <el-cascader
    v-model="cascaderVal"
    :options="treeData"
    :props="{ multiple: true }"
    :show-all-levels="false"
    collapse-tags
    clearable
    filterable
    :debounce="300"
    placeholder="请选择与会成员"
    @change="handleSelect"
    :getCheckedNodes="getCheckedNodes"
  />
  <el-transfer placeholder="请选择其部门下的话机" v-model="value" :data="data"  />
</template>

<script setup lang="ts">
import { ElButton, ElForm, ElCascader, ElTransfer } from "element-plus";
import { useGlobalStore } from "@/stores/global";
const globalStore = useGlobalStore();
const treeData = computed(() => globalStore.personnelTree);

const generateData = () => {
  const data: Option[] = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }
  return data;
};

const cascaderVal = ref();
const data = ref<Option[]>(generateData());
const value = ref([]);

interface Option {
  key: number;
  label: string;
  disabled: boolean;
}


const getCheckedNodes=(CascaderNode: any)=>{
  console.log('获取一个当前选中节点的数组',CascaderNode);
}


const handleSelect = (value: any) => {
  console.log(cascaderVal.value);
};
</script>

<style></style>
