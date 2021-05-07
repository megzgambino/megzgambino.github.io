function generator()    {
    var x = Math.floor((Math.random()*16)+1)
    console.log(x)
    document.getElementById('playerImage').innerHTML = `
    <img src= 'img/player${x}.png' >`
    // console.log(x)

    let name 
   
    switch (x)   {
        case x = 1 :
            name = 'Precius Achiuwa'
            break
        case x = 2 :
            name = 'Bam Adebayo'
            break
        case x = 3 :
            name = 'Trevor Ariza'
            break
        case x = 4 :
            name = 'Nemanja Bjelica'
            break
        case x = 5 :
            name = 'Jimmy Butler'
            break
        case x = 6 :
            name = 'Dewayne Dedmon'
            break
        case x = 7 :
            name = 'Goran Dragic'
            break
        case x = 8 :
            name = 'Udonis Haslem'
            break
        case x = 9 :
            name = 'Tyler Herro'
            break
        case x = 10 :
            name = 'Andre Iguodala'
            break
        case x = 11 :
            name = 'Kendrick Nunn'
            break
        case x = 12 :
            name = 'KZ Okpala'
            break
        case x = 13 :
            name = 'Victor Oladipo'
            break
        case x = 14 :
            name = 'Duncan Robinson'
            break
        case x = 15 :
            name = 'Max Strus'
            break
        case x = 16 :
            name = 'Gabe Vincent'
            break
    }
    document.getElementById('playerName').innerHTML = `${name}`
    console.log(name)
}