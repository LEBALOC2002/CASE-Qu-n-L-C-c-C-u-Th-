var idRow;
class Player{
    constructor(id, name, photo, birthday, nation){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.birthday = birthday;
        this.nation = nation; 
    }
    
}

let players = [];
function renderlistplayer() {
    let htmls = players.map(function (player) {
        return `
        <tr>
        <td>${player.id}</td>
        <td>${player.name}</td>
        <td>
        <img style="width:100px; height:100px; border-radius: 50px;" src="${player.photo}" alt="">
        </td>
        <td>${player.birthday}</td>
        <td>${player.nation}</td>
        <td> 
        <button class="td-tbcass" id="buttonedit" onclick="edit(${player.id})">EDIT</button>
        <button class="td-tbcase" id="buttondelete" onclick="deletelist(${player.id})">DELETE</button>
        </td>
        </tr>
        `
    });
    document.querySelector('.tbcase>tbody').innerHTML = htmls.join("");

}
function getMaxId(){
    maxId = players[0].id;
    for (let i =1; i<players.length; i++){
        if (players[i].id > maxId){
            maxId = players[i].id;
        }
    }
    return maxId;
}

function add() {
    let index = Number(getMaxId());
    let name = document.querySelector(".name").value;
    if (name.trim() == "" || name == null) {
        alert("Please re-enter your name");
        return;
    }
    let photo = document.querySelector(".photo").value;
    if (photo.trim() == "" || photo == null) {
        alert("Please re-enter your name");
        return;
    }
    if (!isURL(photo)) {
        alert('Photo must url');
        return;
    }
    let birthday = document.querySelector(".birthday").value;
    if (birthday.trim() == "" || birthday == null) {
        alert("Please re-enter your Photo");
        return;
    }
    let nation = document.querySelector(".nation").value;
    if (nation.trim() == "" || nation == null) {
        alert("Please re-enter your Nation");
        return;
    }
    players.push(new Player(index+1, name, photo, birthday, nation));
    setdata(keydata, players);
    renderlistplayer();
    cancel();
}

function deletelist(id) {
    let position = getPosition(id);
    confirmed = window.confirm(`Bạn có chắc chắn muốn xóa ${players[position].name} không?`);
    if (confirmed) {
        players.splice(position, 1);
        setdata(keydata, players);
        renderlistplayer(players);
        cancel();
    }
}

function getPosition(id){
    for(let i = 0; i <players.length; i++){
        if (id == players[i].id){
            return i;
        }
    }
}
function edit(id) {
    let position = getPosition(id);
    let part = players[position];
    document.getElementById('inputId').value = part.id;
    document.getElementById('inputName').value = part.name;
    document.getElementById('inputPhoto').value = part.photo;
    document.getElementById('inputBirthday').value = part.birthday;
    document.getElementById('inputNation').value = part.nation;
}
function cancel() {
    document.querySelector("#inputId").value = "";
    document.querySelector(".name").value = "";
    document.querySelector(".photo").value = "";
    document.querySelector(".birthday").value = "";
    document.querySelector(".nation").value = "";
}
function save(){
    let id = document.getElementById("inputId").value;
    let position = getPosition(id);
    let name = document.getElementById('inputName').value;
    if (name.trim() == "" || name == null) {
        alert("Please re-enter your name");
        return;
    }
    let photo = document.getElementById('inputPhoto').value;
    if (photo.trim() == "" || photo == null) {
        alert("Please re-enter your photo");
        return;
    }
    let birthday = document.getElementById('inputBirthday').value;
    if (birthday.trim() == "" || birthday == null) {
        alert("Please re-enter your birthday");
        return;
    }
    let nation = document.getElementById('inputNation').value;
    if (nation.trim() == "" || nation == null) {
        alert("Please re-enter your nation");
        return;
    }
    players[position] = new Player(id, name, photo, birthday, nation);
    setdata(keydata, players);
    renderlistplayer();
    cancel();
}

let keydata = 'keydata';
function getdata(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setdata(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}
function dataplayer() {
    if (localStorage.getItem(keydata) == null) {
        players = [
            new Player(1, "Jadon Malik Sancho ", "https://media.vov.vn/sites/default/files/styles/large/public/2021-07/sancho_mu.jpg", "25-03-2000", "Vương Quốc Anh"),
            new Player(2, "Cristiano Ronaldo", "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg", "05-02-1985", "Bồ Đào Nha")
        ];
        setdata(keydata, players);
    }
    else {
        players = getdata(keydata)
    }
}

function isURL(urlString) {
    try {
        new URL(urlString);
        return true;
    }
    catch {
        return false;
    }
}
function main() {
    dataplayer();
    renderlistplayer();
}
main();
