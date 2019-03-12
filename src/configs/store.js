// 状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 实例化Vuex，创建一个仓库
const store = new Vuex.Store({
    // 状态
    state: {
        // 底部索引状态值
        F_cur: 0,
        // 上一次底部索引状态值（回退用）
        F_cur_0: 0,
        // 底部索引状态值（临时储存用）
        temp_cur: 0,
        user_name: "********",
        user_phone: "********",
        // 登录注册头部标题状态
        userTitleBull: true,
        // 登录状态，不知道有没有用,好像没有用，还是stroage吧
        // isLogin:false
    },
    // 修改数据的方法 真正改数据的操作
    mutations: {
        // 修改底部索引
        editF_cur(state, data) {
            state.F_cur_0 = state.F_cur;
            state.F_cur = data;
            // console.log(state.F_cur_0+"===>"+state.F_cur);
        }, editUserTitle(state, data) {
            //显示登录还是注册
            // state.userTitleBull = !state.userTitleBull;
            state.userTitleBull = data;
        }, edituser_name(state, data) {
            state.user_name = data;
        }, edituser_phone(state, data) {
            state.user_phone = data;
        }

    },
    // 获取数据的方法
    getters: {
        // 获取author的方法
        // getAuthor(state) {
        //     return state.author + ' Yeah'
        // }
    },
    actions: {
        // setAuthor(context, data) {
        //     context.commit('editAuthor', data)
        //     // context.commit('editCount')
        // }
    }
})

export default store