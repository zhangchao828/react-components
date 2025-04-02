export default {
  name: '简单表格',
  args: {
    sticky: true,
    columnsDragSortable: true,
    bordered: true,
    ellipsis: false,
    columns: [
      {
        title: 'ID',
        dataIndex: 'id',
        dragSortable: false,
        fixed: 'left',
        // filters: [{ label: 'aaa', value: 1 }],
      },
      {
        title: '年龄',
        dataIndex: 'age',
        sorter: true,
        filters: [{ label: 'aaa', value: 1 }],
      },
      {
        title: '姓名',
        dataIndex: 'name',
        sorter: true,
        filters: [{ label: 'aaa', value: 1 }],
      },
      {
        title: '操作',
        actions: [{ name: '删除' }, { name: '编辑' }],
      },
    ],
  },
}
