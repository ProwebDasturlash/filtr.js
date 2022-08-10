let users = [];
let i = 0;


while (i == 0) {
    let name1 = prompt("Ism kriting!");
    let arr = name1.split(' ');

    if (arr[0] == 'add') {
        users.push(arr[1]);
        console.log(users);
    } else if (arr[0] == 'del' && arr.length > 1) {

        for (let i = 0; i < users.length; i++) {
            if (users[i] == arr[1]) {
                users.splice(i, 1);
                console.log(users);
            }

        }
    } else if (arr[0] == 'del' && arr.length == 1) {
        users = [];
        console.log(users);
    } else if (arr[0] == 'stop') {
        i++
        console.log(users);
    }

}