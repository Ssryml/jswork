
let now = new Date()
let d = h =m =s =0;
d =0;
h =0;
m =59 -now.getMinutes();
s =59 -now.getSeconds();
let id =setInterval(seckill,1000);
function seckill() {
    s--;
    if(s ==-1){
        s =59;
        m--;
    }
    if(m ==-1){
        m =59;
    }
    document.getElementById('d').innerHTML = d +'天';
    document.getElementById('h').innerHTML = h +'时';
    document.getElementById('m').innerHTML = m +'分';
    document.getElementById('s').innerHTML = s +'秒';
  }