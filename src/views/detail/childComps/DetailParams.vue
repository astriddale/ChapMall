<template>
  <div id="detail-params">
    <table
      class="tables-1"
      v-for="(table, index) in itemParams.tables"
      :key="index"
    >
      <tr class="tr-1" v-for="(tr, indey) in table" :key="indey">
        <td class="td-1" v-for="(td, indez) in tr" :key="indez">
          {{ td }}
        </td>
      </tr>
    </table>
      <table class="table-2">
        <tr class="tr-2" v-for="(item, indec) in itemParams.set" :key="indec">
          <td class="td-2">{{ item.key }}</td>
          <td class="td-3">{{ item.value }}</td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style scoped>
#detail-params {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
#detail-params table {
    width: 100%;
    border-collapse: collapse;
  }
.tables-1 .tr-1 {
  height: 42px;
}
.tables-1 .tr-1 .td-1 {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
 .table-2 {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
 .table-2 .tr-2 td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.table-2 .tr-2 {
  height: 42px;
}
 .table-2 .tr-2 .td-2 {
  width: 100px;
}
 .table-2 .tr-2 .td-3 {
  color: var(--color-high-text);
}
</style>
