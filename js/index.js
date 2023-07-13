function generateQuote(){
    var userNames = ["--Jim Rohn","--Frank Sinatra","--Wayne Gretzy'","--Nelson Mandela","--Elbert Hubbard" ];
    var text =[
        '"Beware of what you become in pursuit of what you want."'
        ,'"The best revenge is massive success."'
        ,'"You miss 100% of the shots you don\'t take."',
        '"Resentment is like drinking poison and waiting for your enemies to die."',
        '"Do not take life too seriously. You will not get out alive."'
    ]
    var num = Math.floor ( Math.random() * userNames.length)
    document.getElementById("quoteOutput").innerHTML = text [num] ;
    document.getElementById("authorOutput").innerHTML = userNames[num] ;
}




