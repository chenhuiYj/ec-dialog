# ec-dialog

#### 个人练手项目，基于vue2.0开发的弹窗项目，目前功能不是很强大，还没有上传npm,功能也很少。以后再逐一完善

## 使用方法

### 在入口文件在全局引入组件

      import dialog from './src/js/components/index';

      Vue.use(dialog)

### 使用
    this.$confirm({
        title:'提示',
        content:'这里是提示内容',
        submitText:'提交',
        cancelText:'返回'
    }).then(()=>{
        this.$alert({
            title:'提示2',
            content:'这里是提示内容2'
        }).then(()=>{
            this.name='守候'
            alert(this.name)
        })
    }).catch((err)=>{
        alert(err)
    })
### 配置说明
* title-标题
* content-内容
* submitText-提交按钮文字（默认‘确定’）
* cancelText-取消按钮文字（默认‘取消’）





