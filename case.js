var idRow;
function Player
    (id, name, photo, birthday, nation) {
    this.id = id;
    this.name = name;
    this.photo = photo;
    this.birthday = birthday;
    this.nation = nation;
}
let id = 0;
let players = [] ;
function renderlistplayer() {
    let htmls = players.map(function (list) {
        return `
        <tr>
        <td>${list.id}</td>
        <td>${list.name}</td>
        <td>
        <img style="width:100px; height:100px; border-radius: 50px;" src="${list.photo}" alt="">
        </td>
        <td>${list.birthday}</td>
        <td>${list.nation}</td>
        <td> 
        <button class="td-tbcass" id="buttonedit" onclick="edit(${list.id - 1})">EDIT</button>
        <button class="td-tbcase" id="buttondelete" onclick="deletelist(${list.id})">DELETE</button>
        </td>
        </tr>
        `
    });
    document.querySelector('.tbcase>tbody').innerHTML = htmls.join("");

}
function add() {
    let name = document.querySelector(".name").value;
    if ( name.trim() == "" || name == null){
        alert ("Please re-enter your name");
        return ; 
    }
    let photo = document.querySelector(".photo").value;
    if ( photo.trim() == "" || photo == null){
        alert ("Please re-enter your name");
        return ; 
    }
    if(!isURL(photo)){
        alert('Photo must url');
        return;
    }
    let birthday = document.querySelector(".birthday").value ;
    if ( birthday.trim() == "" || birthday == null){
        alert ("Please re-enter your Photo");
        return ; 
    }
    let nation = document.querySelector(".nation").value ;
    if ( nation.trim() == "" || nation == null){
        alert ("Please re-enter your Nation");
        return ; 
    }
    players.push(new Player(++id, name, photo, birthday, nation));
    setdata(keydata,players);
    renderlistplayer();
    clear ();
}
function clear (){
    document.querySelector(".name ").value = null;
    document.querySelector(".photo ").value = null;
    document.querySelector(".birthday ").value = null;
    document.querySelector(".nation").value = null;
}
function deletelist(id) {
    let index = players.findIndex(function (player) {
        return player.id == id;
    })
    confirmed = window.confirm(`Bạn có chắc chắn muốn xóa ${players[index].name} không?`);
    if (confirmed) {

        players.splice(index, 1);
        setdata(keydata,players);
        renderlistplayer(players);
    }
    deletelist();
}
function edit(index) {
    idRow = index;
    let part = players[index];
    document.getElementById('input1').value = part.name;
    document.getElementById('input2').value = part.photo;
    document.getElementById('input3').value = part.birthday;
    document.getElementById('input4').value = part.nation;
}
function cancel() {
    document.querySelector(".name").value = "";
    document.querySelector(".photo").value = "";
    document.querySelector(".birthday").value = "";
    document.querySelector(".nation").value = "";
}
function save(id) {
    let number = i;
    let name = document.getElementById('input1').value;
    let photo = document.getElementById('input2').value;
    let birthday = document.getElementById('input3').value;
    let nation = document.getElementById('input4').value;
    players[id] = new Player(number, name, photo, birthday, nation);
    setdata(keydata,players);
    renderlistplayer();

}
let keydata = 'keydata';
function getdata (key){
 return JSON.parse(localStorage.getItem(key));
}
function setdata (key,data){
 localStorage.setItem(key,JSON.stringify(data));
}
function dataplayer() {
    if (localStorage.getItem(keydata) == null) {
        players = [
            new Player(++id, "Jadon Malik Sancho ", "https://media.vov.vn/sites/default/files/styles/large/public/2021-07/sancho_mu.jpg", "25-03-2000", "Vương Quốc Anh"),
            new Player(++id, "Cristiano Ronaldo", "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg", "05-02-1985", "Bồ Đào Nha")
        ];
        setdata(keydata,players);
    }
    else {
        players = getdata(keydata)
    }
}

function isURL(urlString){
    try{
        new URL(urlString);
        return true;
    }
    catch{
        return false;
    }
}
function main() {
    dataplayer();
    renderlistplayer();
}
main();
