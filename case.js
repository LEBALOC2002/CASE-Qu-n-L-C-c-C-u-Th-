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
let players = [
    new Player(++id, "Jadon Malik Sancho ", "https://media.vov.vn/sites/default/files/styles/large/public/2021-07/sancho_mu.jpg", "25-03-2000", "Vương Quốc Anh"),
    new Player(++id, "Cristiano Ronaldo", "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg", "05-02-1985", "Bồ Đào Nha")
]
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
        <button class="d-none" id="eventedit" onclick="edit(${list.id -1 })">EDIT</button>
        <button id="eventdelete" onclick="deletelist(${list.id })">DELETE</button>
        </td>
        </tr>
        `
    });
    document.querySelector('.tbcase>tbody').innerHTML = htmls.join("");

}
function add() {
    let name = document.querySelector(".name").value;
    let photo = document.querySelector(".photo").value;
    let birthday = document.querySelector(".birthday").value;
    let nation = document.querySelector(".nation").value;
    players.push(new Player(++id, name, photo, birthday, nation));
    renderlistplayer();
}
function edit(index) {
    idRow = index;
    let part = players[index];
    document.getElementById('input1').value = part.name;
    document.getElementById('input2').value = part.photo;
    document.getElementById('input3').value = part.birthday;
    document.getElementById('input4').value = part.nation;
}
function deletelist(id) {
    let index = players.findIndex(function(player){
        return player.id == id;
    })
    confirmed = window.confirm(`Bạn có chắc chắn muốn xóa ${players[index].name} không?`);
    if (confirmed) {
       
        players.splice(index,1);
        renderlistplayer(players);
    }
    deletelist();
}
function cancel() {
 document.querySelector(".name").value = "";
 document.querySelector(".photo").value = "";
 document.querySelector(".birthday").value = "";
 document.querySelector(".nation").value = "" ;
}
function save (id){
    let number = id +1 ;
    let name = document.getElementById('input1').value;
    let photo =  document.getElementById('input2').value;
    let birthday = document.getElementById('input3').value;
    let nation = document.getElementById('input4').value;
    players[id] = new Player(number, name, photo, birthday, nation);
    renderlistplayer();

}
renderlistplayer();
