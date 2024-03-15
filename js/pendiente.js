$.fn.DataTable.ext.pager.numbers_length = 10;

var params = "";
$.ajax({
    url: web_service + "/config?cmd=config_buscador&t=" + (new Date()).getTime() + params,
    type: 'POST',
    success: function (data) {
        if (data.status) {
            initData(data);
        }
    },
    timeout: 20000,
    error: function (err) {
        console.error(err);
    }
});