/**
 * 可编辑表格
 */
export default {
  args: {
    serial: true,
    columns: [
      {
        title: 'ID',
        dataIndex: 'id',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        editable: true,
      },
      {
        title: '操作',
        actions: [{ name: '删除' }, { name: '编辑' }],
      },
    ],
  },
}
