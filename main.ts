controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 . . . . . . . . . . 
        . . . . 5 2 . . . . . . . . . . 
        . . 2 2 5 4 8 . . . . . . . . . 
        . . 2 2 5 4 8 7 9 4 2 . . . . . 
        . . 2 2 5 4 8 . . . . . . . . . 
        . . . . 5 2 . . . . . . . . . . 
        . 2 2 2 2 2 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    6 9 9 9 9 8 8 . . . . . . . . . 
    . . . . b 8 8 9 1 . . . . . . . 
    . . . . b 8 8 9 1 . . . . . . . 
    . . . . b 8 8 . . . . . . . . . 
    7 7 7 . b 8 8 . . . . . . . . . 
    5 5 5 5 5 5 5 5 5 5 b 9 . . . . 
    5 5 5 5 5 5 5 5 5 5 b 9 . . . . 
    7 7 7 . b 8 8 . . . . . . . . . 
    . . . . b 8 8 . . . . . . . . . 
    . . . . b 8 8 9 1 . . . . . . . 
    . . . . b 8 8 9 1 . . . . . . . 
    6 9 9 9 9 8 8 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
info.setLife(100)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 4 . . . . . . . 
        . 2 2 2 . . 5 5 . . . . . . . . 
        . . . 2 2 2 5 5 2 2 5 . . . . . 
        . . . 2 2 2 2 2 2 2 5 8 . . . . 
        . . . 2 2 2 5 5 2 2 5 . . . . . 
        . 2 2 2 . . 5 5 . . . . . . . . 
        . . . . . . 5 5 4 . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 155))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
