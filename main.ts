input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.SmallHeart)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Silly)
    } else {
        basic.showIcon(IconNames.Butterfly)
        basic.showIcon(IconNames.House)
        basic.showIcon(IconNames.Tortoise)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.No)
    }
})
