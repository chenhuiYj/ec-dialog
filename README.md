# ec-dialog

#### 个人练手项目，基于vue2.0开发的弹窗项目，拥有最基本的功能。以后再逐一完善

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
#### 配置说明
* title-标题
* content-内容
* submitText-提交按钮文字（默认‘确定’）
* cancelText-取消按钮文字（默认‘取消’）

### dialog

    <ec-dialog :show="show" :title="'提示'">
            <div class="test">
                <table>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </table>
                <div class="btn">
                    <ec-button :type="'main'" :value="'确定'" @click="submit"></ec-button>
                    <ec-button :type="'cancel'" :value="'取消'" @click="close"></ec-button>
                </div>
            </div>
        </ec-dialog>

js代码

        data(){
                return {
                    'name': 'index',
                    show:true
                }
            },
            methods:{
                close(){
                    alert('close')
                    this.show=false;
                },
                submit(){
                    alert('submit')
                    this.show=false;
                }
            },
### 配置说明
show:是否显示

title:标题
### 按钮配置说明
type:按钮类名  main(蓝)  |  cancel(白)  |  danger(红)  |  success(绿)

value:按钮文字
## LICENSE
MIT




