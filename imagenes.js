var imagenesPosts = ['Post 1.jpg', 
'Post 2.png',
'Post 3.png', 
'Post 4.png', 
'Post 5.png', 
'Post 6.png', 
'Post 7.png', 
'Post 8.png', 
'Post 9.png', 
'Post 10.png', 
'Post 11.png', 
'Post 12.png',];
var avatar= 'Imagenes/avatar.jpg';
function cambiarAvatar() {
    var avatarImg = document.getElementById('avatar')
    avatarImg.src = avatar
    console.log(avatarImg)
}

cambiarAvatar();

function cambiarPost(){
    var postsImg = document.getElementsByClassName('post')
    for(var i=0; i<postsImg.length; i++){
         postsImg[i].src = "Imagenes/" + imagenesPosts[i]
    }
    console.log(postsImg)
}

cambiarPost();