function goldbach(){
    var str = document.getElementById('odd').value
    if(str <= 2 || (str % 2 != 0)){
        alert ('输入一个大于2的偶数')
        return false
    }
}