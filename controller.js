//业务逻辑处理
module.exports = {
    showIndexPage(req,res) {
        res.render('index', {})

    },
    showAddPage(req,res) {
        res.render('add', {})

    },
    showEditPage(req,res) {
        res.render('edit', {})

    },
    showInfoPage(req,res) {
        res.render('info', {})

    }
}