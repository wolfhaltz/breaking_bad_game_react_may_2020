export default function handleMovement(player){

    function handleKeyDown(e){
        e.preventDefault()
        switch(e.keyCode){
            case 37:
                return console.log('left')
            case 37:
                return console.log('up')
            case 39:
                return console.log('right')
            case 40:
                return console.log('down')
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })
    return player
}