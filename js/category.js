$(function () {
  /*  // 发送ajax请求后台数据
   axios.get('http://fullstack.net.cn:3000/category/queryTopCategory')
     .then(function (data) {
       //  console.log(data)
       // 获取到的后台数据用模板引擎渲染
       var html = template('categoryFirst', data);
       $('#firstBox').html(html);
     }) */

  //  获取一级分类数据
  getFirstCategory()
    //  渲染一级分类数据
    .then(renderFirstCategory)


  $('#firstBox').on('click', 'a', function () {
    // 获取参数，获取二级分类时传参
    var id = $(this).data('id');
    // console.log(id);
    // alert(1);
  //  获取二级分类数据
    getSecondCategory(id)
    //  渲染二级分类数据    
      .then(renderSecondCategory)
  })
})

// 获取一级分类
function getFirstCategory() {
  return axios.get('/category/queryTopCategory');
}
// 渲染一级分类
function renderFirstCategory(data) {
  var html = template('categoryFirst', data);
  $('#firstBox').html(html);
}
// 获取二级分类
function getSecondCategory(id) {
  return axios.get('/category/querySecondCategory', {
    params: {
      id: id
    }
  });
}
// 渲染二级分类
function renderSecondCategory(data) {
  console.log(data)
  var html = template('categorySecond', {
    list: data,
    api: axios.defaults.baseURL
  });
  $('#secondBox').html(html);
}