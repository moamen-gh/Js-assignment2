function getQoute(){
    var qoute=['“Be yourself; everyone else is already taken.”',
        '“So many books, so little time.”',
    
    '“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”',

    '“A room without books is like a body without a soul.”',
    '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.”',
    '“You know you are in love when you cant fall asleep because reality is finally better than your dreams.”'
    ]
for(var i=0;i<qoute.length;i++){
    var x= qoute[Math.floor(Math.random() * i) + 1];
}


document.getElementById('Quote').innerHTML=x;

}