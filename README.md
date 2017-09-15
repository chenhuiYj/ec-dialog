# ec-dialog

#### 个人练手项目，基于vue2.0开发的弹窗项目，目前功能不是很强大，还没有上传npm,功能也很少。以后再逐一完善

## 使用方法

### 安装
    $ npm install ec-dialog
### 引入
    import dialog from 'ec-dialog'
    Vue.use(dialog)
### 使用方式

#### confirm
    this.$ec_confirm({
         title:'提示',
         content:'这里是提示内容',
         submitText:'提交',
         cancelText:'返回'
          }).then(()=>{
              //点击确定
              this.name='守候'
              alert(this.name)
          }).catch((err)=>{
            //点击取消
        })
#### alert
    this.$ec_alert({
            title:'提示2',
            content:'这里是提示内容2'
        }).then(()=>{
            this.name='守候'
            alert(this.name)
    })
#### tips
    this.$ec_tips({
        content:'点赞成功'
    })
#### loading
    let loadingContent = this.$ec_loading({
        content: '玩命加载中'
    });
    console.log(loadingContent)
    //两秒后关闭
    setTimeout(()=>{loadingContent.close();},2000)
### 配置说明
* title-标题
* content-内容
* submitText-提交按钮文字（默认‘确定’）
* cancelText-取消按钮文字（默认‘取消’）

## LICENSE
MIT




